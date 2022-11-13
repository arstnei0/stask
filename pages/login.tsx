import { Button } from "@mui/material"
import { Provider } from "next-auth/providers"
import { getProviders, signIn } from "next-auth/react"
import { Context, FunctionComponent } from "react"

const Login: FunctionComponent<{ providers: Provider }> = ({ providers }) => {
	return (
		<>
			<h1>Login your Stask account</h1>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<Button onClick={() => signIn(provider.id)}>
						Login with {provider.name}
					</Button>
				</div>
			))}
		</>
	)
}

export async function getServerSideProps(context: Context<{}>) {
	const providers = await getProviders()
	return {
		props: { providers },
	}
}

export default Login
