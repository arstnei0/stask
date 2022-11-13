import "../styles/globals.css"
import type { AppContext, AppProps } from "next/app"
import Head from "next/head"
import { SessionProvider, useSession } from "next-auth/react"
import { theme } from "../lib/muiTheme"
import { ThemeProvider } from "@mui/material"
import Menu from "../components/Menu"

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<SessionProvider session={session}>
				<Head>
					<link rel="icon" href="/favicon.ico"></link>
				</Head>
				<main>
						<Component {...pageProps} />
				</main>

				<Menu></Menu>
			</SessionProvider>
		</ThemeProvider>
	)
}
