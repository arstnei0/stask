import { Provider } from "next-auth/providers"
import { getProviders, signIn } from "next-auth/react"
import { Context, FunctionComponent } from "react"

const Login: FunctionComponent<{ providers: Provider }> = ({
    providers
}) => {
	return <>
        {Object.values(providers).map((provider) => (
        <div key={provider.name}>
            <button onClick={() => signIn(provider.id, {
                redirect: false
            })}>
            Sign in with {provider.name}
            </button>
        </div>
        ))}
    </>
}

export async function getServerSideProps(context: Context<{}>) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

export default Login
