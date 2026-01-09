"use client";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
    issuer: string;
    clientId: string;
}

export default function LogoutButton({ issuer, clientId }: LogoutButtonProps) {
    return (
        <button
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
            onClick={() => {
                const returnTo = window.location.origin;
                const auth0LogoutUrl = `${issuer}/v2/logout?client_id=${clientId}&returnTo=${returnTo}`;
                signOut({ callbackUrl: auth0LogoutUrl });
            }}
        >
            Sign Out
        </button>
    );
}