import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import {TodolistItem} from "@/TodolistItem.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTodolists} from "@/model/todolists-selectors.ts";

export const Todolists = () => {

    const todolists = useAppSelector(selectTodolists)


    return (
        <div>
            {todolists.map(todolist => {


                return (
                    <Grid key={todolist.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <TodolistItem todolist={todolist}
                                // tasks1={filteredTasks}
                                // deleteTask={deleteTask}
                                // changeFilter={changeFilter}
                                // createTask={createTask}
                                // changeTaskStatus={changeTaskStatus}
                                // deleteTodolist={deleteTodolist}
                                // changeTaskTitle={changeTaskTitle}
                                // changeTodolistTitle={changeTodolistTitle}
                            />
                        </Paper>
                    </Grid>
                )
            })}
        </div>
    );
};