import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">Secret Dashboard</h1>
      <p className="mt-4 text-xl">Welcome, {session?.user?.name}!</p>
      <p className="text-sm text-gray-500">{session?.user?.email}</p>
      
      <Link href="/api/auth/signout" className="mt-8 px-4 py-2 bg-red-500 text-white rounded">
        Sign Out
      </Link>
    </div>
  );
}