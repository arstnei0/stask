import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { clientPromise } from "../../../lib/db"

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	secret: "2u3USyu5bVXKJeNYqMMyDugvbCUAkuS27E7ekPmDBak=",
	pages: {
		signIn: "/login",
		signOut: "/lougout",
	},
	adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)
