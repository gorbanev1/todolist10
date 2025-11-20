import List from "@mui/material/List";
import {Task} from "@/features/todolists/model/tasks-reducer.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTasks} from "@/features/todolists/model/tasks-selectors.ts";
import {TaskItem} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.tsx";

type Props = {
    id: string
    filter: string
};
export const Tasks = ({filter, id}: Props) => {
    const tasks1 = useAppSelector(selectTasks)
    const tasks = tasks1[id]
    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter((task: Task) => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter((task: Task) => task.isDone)
    }
    return (
        <div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map((task: Task) => {
                        return <TaskItem todolistId={id} task={task}/>
                    })

                    }
                </List>
            )}
        </div>
    );
};