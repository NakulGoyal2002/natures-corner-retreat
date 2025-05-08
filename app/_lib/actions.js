"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
		throw new Error("Please provide a valid national ID");

	const updateData = { nationality, nationalID, countryFlag };

	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

// export async function createBooking(bookingData, formData) {
// 	const session = await auth();
// 	if (!session) throw new Error("You must be logged in");

// 	const newBooking = {
// 		...bookingData,
// 		guestId: session.user.guestId,
// 		numGuests: Number(formData.get("numGuests")),
// 		observations: formData.get("observations").slice(0, 1000),
// 		extrasPrice: 0,
// 		totalPrice: bookingData.cabinPrice,
// 		isPaid: false,
// 		hasBreakfast: false,
// 		status: "unconfirmed",
// 	};

// 	const { error } = await supabase.from("bookings").insert([newBooking]);
// 	if (error) throw new Error("Booking could not be created");

// 	revalidatePath(`/cabins/${bookingData.cabinId}`);
// 	redirect("/cabins/thankyou");
// }

// export async function createBooking(bookingData, formData) {
// 	const session = await auth();
// 	if (!session) throw new Error("You must be logged in");

// 	const newBooking = {
// 		...bookingData,
// 		guestId: session.user.guestId,
// 		numGuests: Number(formData.get("numGuests")),
// 		observations: formData.get("observations").slice(0, 1000),
// 		extrasPrice: 0,
// 		totalPrice: bookingData.cabinPrice,
// 		isPaid: false,
// 		hasBreakfast: false,
// 		status: "unconfirmed",
// 	};

// 	const { error } = await supabase.from("bookings").insert([newBooking]);
// 	if (error) throw new Error("Booking could not be created");

// 	// ✅ Send confirmation email
// 	await fetch(`${process.env.NEXTAUTH_URL}/api/send-confirmation`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			email: session.user.email,
// 			name: session.user.user_metadata?.name || "Guest",
// 			reservationDetails: `
// 				Cabin: ${bookingData.cabinName}
// 				Dates: ${bookingData.startDate} to ${bookingData.endDate}
// 				Guests: ${newBooking.numGuests}
// 				Observations: ${newBooking.observations || "None"}
// 			`,
// 		}),
// 	});

// 	revalidatePath(`/cabins/${bookingData.cabinId}`);
// 	redirect("/cabins/thankyou");
// }

// export async function createBooking(bookingData, formData) {
// 	const session = await auth();
// 	if (!session) throw new Error("You must be logged in");

// 	const newBooking = {
// 		...bookingData,
// 		guestId: session.user.guestId,
// 		numGuests: Number(formData.get("numGuests")),
// 		observations: formData.get("observations").slice(0, 1000),
// 		extrasPrice: 0,
// 		totalPrice: bookingData.cabinPrice,
// 		isPaid: false,
// 		hasBreakfast: false,
// 		status: "unconfirmed",
// 	};

// 	// Remove non-schema fields like cabinName
// 	const { cabinName, ...cleanBookingData } = newBooking;

// 	const { error } = await supabase.from("bookings").insert([cleanBookingData]);

// 	if (error) {
// 		console.error("Supabase insert error:", error); // check again after fix
// 		throw new Error("Booking could not be created");
// 	}

// 	// Optional: Send email confirmation (reuse cabinName here)
// 	await fetch(`${process.env.NEXTAUTH_URL}/api/send-confirmation`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			email: session.user.email,
// 			name: session.user.user_metadata?.name || "Guest",
// 			reservationDetails: `
// 				Cabin: ${cabinName}
// 				Dates: ${bookingData.startDate} to ${bookingData.endDate}
// 				Guests: ${newBooking.numGuests}
// 				Observations: ${newBooking.observations || "None"}
// 			`,
// 		}),
// 	});

// 	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/send-confirmation`, {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			email: session.user.email,
// 			name: session.user.user_metadata?.name || "Guest",
// 			reservationDetails: `Cabin: ${cabinName} ...`,
// 		}),
// 	});

// 	const emailResult = await res.json();
// 	console.log("Email result:", emailResult);

// 	revalidatePath(`/cabins/${bookingData.cabinId}`);
// 	redirect("/cabins/thankyou");
// }

export async function createBooking(bookingData, formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	// Extract non-database field (only used for email)
	const { cabinName, ...dbBookingData } = bookingData;

	const newBooking = {
		...dbBookingData,
		guestId: session.user.guestId,
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations")?.slice(0, 1000) || "",
		extrasPrice: 0,
		totalPrice: bookingData.cabinPrice,
		isPaid: false,
		hasBreakfast: false,
		status: "unconfirmed",
	};

	// 1. Insert booking in Supabase
	const { error } = await supabase.from("bookings").insert([newBooking]);
	if (error) {
		console.error("Supabase insert error:", error);
		throw new Error("Booking could not be created");
	}

	// 2. Send confirmation email
	try {
		const res = await fetch(
			`${process.env.NEXTAUTH_URL}/api/send-confirmation`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: session.user.email,
					name: session.user.user_metadata?.name || "Guest",
					reservationDetails: `
Cabin: ${cabinName}
Dates: ${new Date(bookingData.startDate).toDateString()} to ${new Date(bookingData.endDate).toDateString()}
Guests: ${newBooking.numGuests}
Observations: ${newBooking.observations || "None"}
				`,
				}),
			}
		);

		const emailResult = await res.json();
		console.log("📧 Email result:", emailResult);
	} catch (emailError) {
		console.error("❌ Failed to send confirmation email:", emailError);
	}

	// 3. Continue with navigation
	revalidatePath(`/cabins/${bookingData.cabinId}`);
	redirect("/cabins/thankyou");
}

export async function deleteBooking(bookingId) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId)) {
		throw new Error("You are not allowed to delete this booking");
	}

	const { error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);

	if (error) throw new Error("Booking could not be deleted");

	revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
	const bookingId = Number(formData.get("bookingId"));

	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId)) {
		throw new Error("You are not allowed to update this booking");
	}

	const updateData = {
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
	};

	const { error } = await supabase
		.from("bookings")
		.update(updateData)
		.eq("id", bookingId)
		.select()
		.single();

	if (error) throw new Error("Booking could not be updated");

	revalidatePath(`/account/reservations/edit/${bookingId}`);
	revalidatePath("/account/reservations");

	redirect("/account/reservations");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
