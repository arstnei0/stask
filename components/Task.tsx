import { Card, CardContent } from "@mui/material"
import { FunctionComponent, useRef } from "react"
import { Draggable } from "react-smooth-dnd"
import { Task } from "../pages"
import styles from "../styles/Task.module.css"

interface TaskProps {
	title: Task["title"]
	index: number
	id: string
}

const Task: FunctionComponent<TaskProps> = ({ title, index, id }) => {
	const D = Draggable as any

	return (
		<D key={id}>
			<div className={styles.task}>
				<Card>
					<CardContent>{title}</CardContent>
				</Card>
			</div>
		</D>
	)
}

export default Task
