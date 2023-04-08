import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
	callbacks: {
		async session({ session, token, user }) {
			return session
		},
		async redirect({ url, baseUrl }) {
			if (url.startsWith("/")) return `${baseUrl}${url}`
			else if (new URL(url).origin === baseUrl) return url
			return baseUrl
		},
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
