import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to My App</h1>
      <p className="mb-4 text-lg">This is the public home page.</p>
      
      {/* This button takes us to the login flow */}
      <Link href="/api/auth/signin" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Log In
      </Link>
      
      <br />
      
      <Link href="/dashboard" className="mt-4 text-blue-500 underline">
        Go to Protected Dashboard (Will force login)
      </Link>
    </main>
  );
}