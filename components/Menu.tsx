import {
	AppBar,
	Avatar,
	Button,
	Divider,
	Toolbar,
	Typography,
	Menu as MMenu,
	MenuItem,
	IconButton
} from "@mui/material"
import { signOut } from "next-auth/react"
import { createRef, FunctionComponent, useRef, useState } from "react"
import { useSession } from "../lib/useSession"

const Menu: FunctionComponent<{}> = () => {
	const { data: session, status } = useSession()
	const [openMenu, setOpenMenu] = useState(false);

	const avatarRef = useRef(null)

	return (
		<AppBar
			position="fixed"
			color="transparent"
			sx={{ top: "auto", bottom: 0 }}
		>
			<Toolbar>
				{status === "authenticated" ? (
					<>
						<Divider
							orientation="vertical"
							flexItem
							sx={{ flexGrow: 1, marginRight: "1em" }}
						></Divider>
						<Typography
							fontSize="1.8em"
							sx={{
								marginRight: "1em",
							}}
						>
							{session.user?.name}
						</Typography>

						<IconButton onClick={() => setOpenMenu(true)} ref={avatarRef}>
							<Avatar
								alt={session.user?.name || ""}
								src={session.user?.image || "/default-avatar.png"}
							></Avatar>
						</IconButton>

						<MMenu open={openMenu} onClose={() => setOpenMenu(false)} anchorEl={avatarRef.current}>
							<MenuItem onClick={() => signOut()}>Logout</MenuItem>
						</MMenu>
					</>
				) : (
					<>
						<Divider
							orientation="vertical"
							flexItem
							sx={{ flexGrow: 1, marginRight: "1em" }}
						></Divider>
						<Button sx={{
							marginRight: '1em'
						}}>Login</Button>
						<Avatar alt={""} src={"/default-avatar.png"}></Avatar>
					</>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Menu
