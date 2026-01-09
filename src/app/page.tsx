import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
			
			{/* Card Container */}
			<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg border border-gray-100">
	
				{/* Header Section */}
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
						Welcome to the App
					</h2>
					<p className="mt-2 text-sm text-gray-500">
						Secure Authentication System
					</p>
				</div>

				<div className="mt-8 space-y-6">
					{/* Login Button */}
					<Link 
						href="/api/auth/signin?callbackUrl=/dashboard" 
						className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
					>
						Sign in with Auth0
					</Link>
					
					 {/* Footer Note */}
					 <div className="text-center text-xs text-gray-400 mt-4">
							<p>Powered by Next.js & NextAuth</p>
							<p>12-Factor Compliant</p>
					 </div>
				</div>
			</div>
		</main>
	);
}