import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Container, DropResult } from "react-smooth-dnd";
import { Task } from "../pages";
import T from "./Task";

interface TaskListProps {
    tasks: Task[]
    setTasks?: Dispatch<SetStateAction<Task[]>>
}
 
const TaskList: FunctionComponent<TaskListProps> = ({ tasks, setTasks }) => {
	const C = Container as any

	const onDrop = (dropResult: DropResult) => {
		const { removedIndex, addedIndex, payload, element } = dropResult

		if (removedIndex !== null && addedIndex !== null)
			setTasks?.((prevTasks: Task[]) => {
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
    
    return <C onDrop={onDrop}>
        {tasks.map((task, index) => (
            <T
                key={task.id}
                index={index}
                id={task.id}
                title={task.title}
            />
        ))}
    </C>
}
 
export default TaskList;