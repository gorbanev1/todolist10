import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import {CreateItemForm} from "@/common/components/CreateItemForm/CreateItemForm.tsx";
import {createTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {Todolists} from "@/features/todolists/ui/Todolists/Todolists.tsx";

type Props = {
/*    createTodolist: (t: string) => void,
    changeFilter: (todolistId: string, filter: FilterValues) => void,
    deleteTodolist: (todolistId: string) => void,
    changeTodolistTitle: (todolistId: string, title: string) => void,
    deleteTask: (todolistId: string, taskId: string) => void,
    createTask: (todolistId: string, title: string) => void,
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void,
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => void,
    Todolists: Todolist[],
    tasks: TasksState*/


};
export const Main = ({
                     }: Props) => {
    const dispatch = useAppDispatch()
    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
    }
    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{mb: '30px'}}>
                <CreateItemForm onCreateItem={createTodolist}/>
            </Grid>
            <Grid container spacing={4}>
                <Todolists/>
            </Grid>
        </Container>
    );
};