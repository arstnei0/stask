import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

console.log(`Github ID: ${process.env.GITHUB_ID}`)
console.log(`Github Secret: ${process.env.GITHUB_SECRET}`)

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

export default NextAuth(authOptions)