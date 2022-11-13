import { atom } from "nanostores"
import { createContext, useState } from "react"
import { Task } from "../pages"

// export const [tasks, setTasks] = useState<Task[]>()

export const tasks = atom<Task[]>([
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

export const moveTask = (removedIndex: number, addedIndex: number) => {
    const result = [...tasks.get()]
    
    const itemToAdd = result.splice(removedIndex - 1, 1)[0]

    result.splice(addedIndex - 1, 0, itemToAdd)
    
    tasks.set(result)

    console.log(removedIndex, addedIndex)
}

export const addTask = (task: Task) => {
    tasks.set([task, ...tasks.get()])
}

export const getId = () => tasks.get().length + 1