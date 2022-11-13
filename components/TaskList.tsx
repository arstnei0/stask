import { Dispatch, FunctionComponent, SetStateAction } from "react"
import { Container, DropResult } from "react-smooth-dnd"
import { Task } from "../pages"
import T from "./Task"
import {useStore} from '@nanostores/react'
import { addTask, getId, moveTask, tasks as tasksStore } from "../lib/tasks"
import { Button } from "@mui/material"

interface TaskListProps {
	
}

const TaskList: FunctionComponent<TaskListProps> = () => {
	const tasks = useStore(tasksStore)

	const C = Container as any

	const onDrop = (dropResult: DropResult) => {
		const { removedIndex, addedIndex, payload, element } = dropResult

		if (removedIndex !== null && addedIndex !== null) moveTask(removedIndex, addedIndex)
	}

	return <>
		<Button onClick={() => addTask({
			title: 'new task', 
			id: getId()
		})}>Add</Button>
		<C onDrop={onDrop}>
			{tasks.map((task, index) => (
				<T
					key={task.id}
					index={index}
					id={task.id}
					title={task.title}
				/>
			))}
		</C>
	</>
}

export default TaskList
