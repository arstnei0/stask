import { Button } from "@mui/material";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { FunctionComponent } from "react";

interface LoginedOnlyProps {
    children: (session: Session) => JSX.Element
}
 
const LoginedOnly: FunctionComponent<LoginedOnlyProps> = ({ children }) => {
	if (process.env.NODE_ENV === 'production') {
		const { data: session, status } = useSession()
		if (status === 'authenticated') {
			return children(session)
		}

		return (
			<div style={{
				textAlign: 'center'
			}}>
				<h1>Please login first.</h1>
				<Button onClick={() => signIn()}>Login</Button>
			</div>
		)
	} else {
		const { data: session, status } = {
			status: 'authenticated',
			data: ({
				user: {
					name: 'Zihan',
					email: 'me@zihan.ga',
					image: 'https://lh3.googleusercontent.com/ogw/AOh-ky2p27Mho1umSIl7XSv6JKBMixB6eaSMhbBAEyJn=s64-c-mo',
				}
			}) as Session
		}
		if (status === 'authenticated') {
			return children(session)
		}

		return (
			<div style={{
				textAlign: 'center'
			}}>
				<h1>Please login first.</h1>
				<Button onClick={() => signIn()}>Login</Button>
			</div>
		)
	}
}
 
export default LoginedOnly;