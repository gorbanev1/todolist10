import type {Todolist} from '@/model/todolists-reducer.ts'
import {CreateItemForm} from './CreateItemForm'
import {createTaskAC} from "@/model/tasks-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {TodolistTitle} from "@/TodolistTitle.tsx";
import {Tasks} from "@/Tasks.tsx";
import {FilterButtons} from "@/FilterButtons.tsx";

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
