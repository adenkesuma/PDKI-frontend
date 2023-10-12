import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 3,
    },
    providers: [
        CredentialProvider({
            id: "member-login",
            name: 'member',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Masukkan Username..." },
                password: { label: "password", type: "password", placeholder: "Masukkan password..." },
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.BASE_URL}/api/route/signin/member`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        })
                    })

                const user = await res.json();

                if (res.ok && user) {
                    return user
                }
                return null

            },
        }),
        CredentialProvider({
            id: "admin-login",
            name: 'admin',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Masukkan Username..." },
                password: { label: "password", type: "password", placeholder: "Masukkan password..." },
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.BASE_URL}/api/route/signin/admin`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        })
                    })

                const user = await res.json();

                if (res.ok && user) {
                    return user
                }
                return null

            },
        })
    ],
    pages: { signIn: '/' },
    callbacks: {
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SIGNIN_PRIVATE_KEY
    }
}

export default NextAuth(authOptions);
