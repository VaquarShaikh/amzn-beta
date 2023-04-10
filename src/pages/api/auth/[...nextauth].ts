import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"

export const authOptions: NextAuthOptions = {
	adapter: UpstashRedisAdapter(
		new Redis({
			url: process.env.UPSTASH_REDIS_URL,
			token: process.env.UPSTASH_REDIS_TOKEN,
		})
	),
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
