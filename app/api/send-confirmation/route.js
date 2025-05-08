// app/api/send-confirmation/route.js

export async function POST(req) {
	const body = await req.json();
	const { email, name, reservationDetails } = body;

	try {
		const response = await fetch(
			"https://api.emailjs.com/api/v1.0/email/send",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: "service_9pzmlns",
					template_id: "template_peyjhp4",
					user_id: "BXxyV2l0KjhAxAzU2", // Your public API key
					template_params: {
						name,
						email,
						reservationDetails,
					},
				}),
			}
		);

		if (!response.ok) {
			const errorText = await response.text(); // For non-JSON errors
			console.error("EmailJS API Error:", errorText);
			return new Response(
				JSON.stringify({ success: false, error: errorText }),
				{
					status: response.status,
				}
			);
		}

		console.log("Email sent successfully");
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error("Network or JSON error:", error);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
			}
		);
	}
}
