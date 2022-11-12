import { Button, Card, CardContent, ThemeProvider } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
import Task from "../components/Task"
import { theme } from "../lib/muiTheme"
import { Container, DropResult } from "react-smooth-dnd"
import TaskList from "../components/TaskList"
import { signIn, signOut, useSession } from 'next-auth/react'

export interface Task {
	id: number
	title: string
}

const style = {
	width: 400,
}

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([
		{
			title: "Complete stask",
			id: 1,
		},
		{
			title: "Add react-smooth-dnd",
			id: 2,
		},
		{
			title: "Science homework",
			id: 3,
		},
		{
			title: "4444",
			id: 4,
		},
	])

	const { data: session } = useSession()
	if (session) {
		return (
		<>
			Signed in as {session?.user?.email} <br />
			<button onClick={() => signOut()}>Sign out</button>
		</>
		)
	}

	console.log(`Github ID: ${process.env.GITHUB_ID}`)
	console.log(`Github Secret: ${process.env.GITHUB_SECRET}`)

	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}
