import { Button, Card, CardContent, ThemeProvider } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
import Task from "../components/Task"
import { theme } from "../lib/muiTheme"
import { Container, DropResult } from "react-smooth-dnd"
import TaskList from "../components/TaskList"
import { signIn, signOut, useSession } from "next-auth/react"
import LoginedOnly from "../components/LoginedOnly"
import * as tasks from "../lib/tasks"

const style = {
	width: 400,
}

export default function Home() {
	return (
		<LoginedOnly>
			{(session) => (
				<>
					<TaskList></TaskList>
				</>
			)}
		</LoginedOnly>
	)
}
