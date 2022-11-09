import { Button, Card, CardContent } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useState } from "react"
import styles from "../styles/Home.module.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Task from "../components/Task"

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
			title: "1111",
			id: 1,
		},
		{
			title: "2222",
			id: 2,
		},
		{
			title: "3333",
			id: 3,
		},
		{
			title: "4444",
			id: 4,
		},
	])

	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setTasks((prevTasks: Task[]) => {
				let tasks = [...prevTasks]
				const poped = tasks.splice(dragIndex, 1)
				tasks.splice(hoverIndex, 0, ...poped)

				console.log(tasks)
				return tasks
			}
		)

		// console.log(tasks)
	}, [])

	const renderTask = useCallback((task: Task, index: number) => {
		// console.log(task)
		
		return (
			<Task
				key={task.id}
				index={index}
				id={task.id}
				title={task.title}
				moveCard={moveCard}
			/>
		)
	}, [])

	return (
		<DndProvider backend={HTML5Backend}>
			<div style={style}>
				{tasks.map((task, index) => renderTask(task, index))}
			</div>
		</DndProvider>
	)
}
