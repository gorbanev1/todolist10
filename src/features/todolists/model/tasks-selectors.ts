import type {TasksState} from '@/features/todolists/model/tasks-reducer.ts'
import type {RootState} from '@/app/store.ts'

export const selectTasks = (state: RootState): TasksState => state.tasks
