import { AuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: AuthOptions = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!,
            clientSecret: process.env.AUTH0_CLIENT_SECRET!,
            issuer: process.env.AUTH0_ISSUER
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {

        async jwt({ token, user }) {
            if(user) {

                // Add an email to test role assignment
                const adminEmails = ["test@example.com"];
                const isAdmin = adminEmails.includes((user.email || "").toLowerCase());
                token.role = isAdmin ? "admin" : "user";
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        }
    }
};