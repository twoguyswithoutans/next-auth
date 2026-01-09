import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  // If no session, kick user out (just in case middleware fails)
  if (!session) {
	redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
	
	<main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
	
		{/* Card Container */}
		<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg border border-gray-100">
			
			{/* Header / Success State */}
			<div className="text-center">
				<h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
					Dashboard
				</h2>
				<p className="mt-2 text-sm text-green-600 font-medium">
					Successfully Authenticated
				</p>
			</div>

			{/* User Info Section */}
			<div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
				<div>
					<label className="text-xs text-gray-500 uppercase font-semibold">User Name</label>
					<p className="text-gray-900 font-medium">{session?.user?.name || "No Name"}</p>
				</div>
				<div>
					<label className="text-xs text-gray-500 uppercase font-semibold">Email Address</label>
					<p className="text-gray-900 font-medium">{session?.user?.email || "No Email"}</p>
				</div>
			</div>

			{/* Role info */}
			{(session?.user as any).role === "admin" ? (
				<div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
					<p className="text-blue-800 font-bold">Admin Panel Access Granted</p>
					<p className="text-xs text-blue-600">You can see this because you are an Admin.</p>
				</div>
			) : (
				<div className="bg-gray-50 border border-gray-200 p-3 rounded text-center">
					<p className="text-gray-500">Standard User Access</p>
				</div>
			)}

			{/* Logout Button */}
			<div className="mt-8 space-y-4">
				<LogoutButton 
					issuer={process.env.AUTH0_ISSUER!} 
					clientId={process.env.AUTH0_CLIENT_ID!} 
				/>
			</div>

		</div>
	</main>
  );
}