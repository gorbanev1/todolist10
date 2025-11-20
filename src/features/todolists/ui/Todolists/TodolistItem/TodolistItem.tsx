import type {Todolist} from '@/features/todolists/model/todolists-reducer.ts'
import {CreateItemForm} from '../../../../../common/components/CreateItemForm/CreateItemForm.tsx'
import {createTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle.tsx";
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/Tasks.tsx";
import {FilterButtons} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButtons.tsx";

type Props = {
    todolist: Todolist

}

export const TodolistItem = (props: Props) => {
    const {
        todolist: {id, title, filter},

    } = props
    const dispatch = useAppDispatch()


    const createTask = (todolistId: string, title: string) => {
        dispatch(createTaskAC({todolistId, title}))
    }


    const createTaskHandler = (title: string) => {
        createTask(id, title)
    }
    return (
        <div>
            <TodolistTitle id={id} title={title}/>
            <CreateItemForm onCreateItem={createTaskHandler}/>
            <Tasks id={id} filter={filter}/>
            <FilterButtons todolist={props.todolist}/>
        </div>
    )
}
