import NextAuth from "next-auth";

declare module 'next-auth'{
    interface Session {
        user: {
            id: String;
        } & Session['user'];
    }
}

declare module 'next-auth/client';