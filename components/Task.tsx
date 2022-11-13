import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	IconButton,
	InputBase,
	Paper,
	TextField,
	Tooltip,
} from "@mui/material"
import { FunctionComponent, useRef, useState } from "react"
import { Draggable } from "react-smooth-dnd"
import { doneTask, Task } from "../lib/tasks"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import styles from "../styles/Task.module.css"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { deleteTask } from "../lib/tasks"

interface TaskProps {
	title: Task["title"]
	index: number
	id: number
}

const Task: FunctionComponent<TaskProps> = ({ title, index, id }) => {
	const D = Draggable as any
	const [editing, setEditing] = useState(false)

	return (
		<D key={id}>
			<Paper
				// component="form"
				elevation={3}
				sx={{
					p: "0.5em",
					display: "flex",
					alignItems: "center",
					width: 600,
					m: "0.3em",
				}}
			>
				<IconButton
					className="task-move-button"
					sx={{ p: "10px" }}
					aria-label="menu"
				>
					<MenuRoundedIcon />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					defaultValue={title}
					inputProps={{ "aria-label": "search google maps" }}
					fullWidth
					style={{
						fontSize: "1.3em",
					}}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<Tooltip title="Delete this task">
					<IconButton
						onClick={() => deleteTask(id)}
						sx={{ p: "10px" }}
						aria-label="delete task"
					>
						<DeleteRoundedIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Mark as done">
					<IconButton
						onClick={() => doneTask(id)}
						sx={{ p: "10px" }}
						aria-label="delete task"
					>
						<DoneRoundedIcon />
					</IconButton>
				</Tooltip>
			</Paper>
		</D>
	)
}

export default Task
