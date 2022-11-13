import { Session } from "next-auth"
import { useSession as useS } from "next-auth/react"

export const useSession = (() =>
	process.env.NODE_ENV === "production"
		? useS()
		: {
				status: "authenticated",
				data: {
					user: {
						name: "Zihan",
						email: "me@zihan.ga",
						image: "https://lh3.googleusercontent.com/ogw/AOh-ky2p27Mho1umSIl7XSv6JKBMixB6eaSMhbBAEyJn=s64-c-mo",
					},
				},
		  }) as typeof useS
