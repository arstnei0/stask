import { Button } from "@mui/material"
import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
import { FunctionComponent } from "react"
import { useSession } from "../lib/useSession"

interface LoginedOnlyProps {
	children: (session: Session) => JSX.Element
}

const LoginedOnly: FunctionComponent<LoginedOnlyProps> = ({ children }) => {
	const { data: session, status } = useSession()
	if (status === "authenticated") {
		return children(session)
	}

	return (
		<div
			style={{
				textAlign: "center",
			}}
		>
			<h1>Please login first.</h1>
			<Button onClick={() => signIn()}>Login</Button>
		</div>
	)
}

export default LoginedOnly
