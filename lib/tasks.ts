import { atom } from "nanostores"

export interface Task {
	id: number
	title: string
	done: boolean
}

export const tasks = atom<Task[]>([
	{
		title: "Complete stask",
		id: 1,
		done: false,
	},
	{
		title: "Add react-smooth-dnd",
		id: 2,
		done: false,
	},
	{
		title: "Science homework",
		id: 3,
		done: false,
	},
	{
		title: "4444",
		id: 4,
		done: false,
	},
])

export const moveTask = (removedIndex: number, addedIndex: number) => {
	const result = [...tasks.get()]

	const itemToAdd = result.splice(removedIndex, 1)[0]

	result.splice(addedIndex, 0, itemToAdd)

	tasks.set(result)
}

export const createTask = ({ title }: { title: string }) => {
	tasks.set([
		{
			title,
			id: getId(),
			done: false,
		},
		...tasks.get(),
	])
}

export const getId = () => tasks.get().length + 1

export const deleteTask = (id: number) => {
	tasks.set(tasks.get().filter((task) => task.id !== id))
}

export const doneTask = (id: number) => {
	tasks.set(
		tasks.get().map((task) =>
			task.id === id
				? {
						...task,
						done: true,
				  }
				: task
		)
	)
}
