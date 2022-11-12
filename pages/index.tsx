import { Button, Card, CardContent, ThemeProvider } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
import Task from "../components/Task"
import { theme } from "../lib/muiTheme"
import NonSSRWrapper from "../components/NonSSRWrapper"
import { Container, DropResult } from "react-smooth-dnd"

export interface Task {
	id: string
	title: string
}

const style = {
	width: 400,
}

export default function Home() {
	const C = Container as any

	const [tasks, setTasks] = useState<Task[]>([
		{
			title: "1111",
			id: "t1",
		},
		{
			title: "2222",
			id: "t2",
		},
		{
			title: "3333",
			id: "t3",
		},
		{
			title: "4444",
			id: "t4",
		},
	])

	const onDrop = (dropResult: DropResult) => {
		const { removedIndex, addedIndex, payload, element } = dropResult

		if (removedIndex !== null && addedIndex !== null)
			setTasks((prevTasks: Task[]) => {
				if (removedIndex === null && addedIndex === null) return []

				const result = [...prevTasks]
				let itemToAdd = payload

				if (removedIndex !== null) {
					itemToAdd = result.splice(removedIndex, 1)[0]
				}

				if (addedIndex !== null) {
					result.splice(addedIndex, 0, itemToAdd)
				}

				return result
			})
	}

	const [winReady, setwinReady] = useState(false)
	useEffect(() => {
		setwinReady(true)
	}, [])

	const onDragEnd = (result: any) => {
		return result
	}

	return (
		<ThemeProvider theme={theme}>
			<C onDrop={onDrop}>
				{tasks.map((task, index) => (
					<Task
						key={task.id}
						index={index}
						id={task.id}
						title={task.title}
					/>
				))}
			</C>
		</ThemeProvider>
	)
}
