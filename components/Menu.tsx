import { AppBar, Avatar, Button, Toolbar } from "@mui/material"
import { FunctionComponent } from "react"
import { useSession } from "../lib/useSession"

const Menu: FunctionComponent<{}> = () => {
	const { data: session, status } = useSession()

	return (
		<AppBar
			position="fixed"
			color="transparent"
			sx={{ top: "auto", bottom: 0 }}
		>
			<Toolbar>
				{status === "authenticated" ? (
					<>
						<h1>{session.user?.name}</h1>
						<Avatar
							alt={session.user?.name || ""}
							src={session.user?.image || "/default-avatar.png"}
						></Avatar>
					</>
				) : (
					<>
						<Avatar alt={""} src={"/default-avatar.png"}></Avatar>
						<Button>Login</Button>
					</>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Menu
