import Link from "next/link";
import { auth } from "../_lib/auth";

function toPascalCase(str) {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export default async function Navigation() {
	const session = await auth();
	const pascalName = session?.user?.name ? toPascalCase(session.user.name) : "";

	return (
		<nav className='z-10 text-xl'>
			<ul className='flex gap-16 items-center'>
				<li>
					<Link
						href='/cabins'
						className='hover:text-accent-400 transition-colors'
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						className='hover:text-accent-400 transition-colors'
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href='/facilities'
						className='hover:text-accent-400 transition-colors'
					>
						Facilities
					</Link>
				</li>
				<li>
					<Link
						href='/support'
						className='hover:text-accent-400 transition-colors'
					>
						Help and Support
					</Link>
				</li>
				<li>
					{session?.user?.image ? (
						<Link
							href='/account'
							className='hover:text-accent-400 transition-colors flex items-center gap-4'
						>
							<img
								className='h-8 rounded-full'
								src={session.user.image}
								alt={session.user.image}
								referrerPolicy='no-referrer'
							/>
							<span>
								<span className='text-base'>{pascalName}</span>
							</span>
						</Link>
					) : (
						<Link
							href='/account'
							className='hover:text-accent-400 transition-colors'
						>
							Guest
						</Link>
					)}
				</li>
				<li>
					<Link
						href='https://natures-corner-retreat-admin.netlify.app'
						className='hover:text-accent-400 transition-colors'
					>
						Admin
					</Link>
				</li>
			</ul>
		</nav>
	);
}
