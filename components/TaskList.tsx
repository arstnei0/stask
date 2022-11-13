import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from "react"
import { Container, DropResult } from "react-smooth-dnd"
import { Task } from "../lib/tasks"
import T from "./Task"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useStore } from "@nanostores/react"
import { createTask, getId, moveTask, tasks as tasksStore } from "../lib/tasks"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Icon, IconButton, TextField, Tooltip } from "@mui/material"

interface TaskListProps {}

const TaskList: FunctionComponent<TaskListProps> = () => {
	const tasks = useStore(tasksStore)

	const C = Container as any

	const onDrop = (dropResult: DropResult) => {
		const { removedIndex, addedIndex, payload, element } = dropResult

		if (removedIndex !== null && addedIndex !== null)
			moveTask(removedIndex, addedIndex)
	}

	const [openDialog, setOpenDialog] = useState(false);
	const closeDialog = () => setOpenDialog(false)
	const [newTaskTitle, setNewTaskTitle] = useState('');

	return (
		<>
			{/* <Button
				onClick={() => setOpenDialog(true)}
				variant="contained"
			>
				Add
			</Button> */}
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				marginBottom: '1em',
			}}>
				<Tooltip title="Create a new task">
					<IconButton onClick={() => setOpenDialog(true)}>
						<AddRoundedIcon color="primary"></AddRoundedIcon>
					</IconButton>
				</Tooltip>
			</div>

			<Dialog open={openDialog}>
				<DialogTitle>Create a new task</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="task-title"
						label="Task title"
						fullWidth
						variant="standard"
						onInput={(e) => setNewTaskTitle((e.target as any).value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeDialog}>Cancel</Button>
					<Button onClick={() => {
						createTask({
							title: newTaskTitle
						})

						closeDialog()
					}}>Create</Button>
				</DialogActions>
			</Dialog>

			<C onDrop={onDrop} dragHandleSelector=".task-move-button">
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
	)
}

export default TaskList
