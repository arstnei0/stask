import "../styles/globals.css"
import type { AppContext, AppProps } from "next/app"
import Head from "next/head"
import { SessionProvider, useSession } from "next-auth/react"

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico"></link>
			</Head>
			<main>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</main>
		</>
	)
}