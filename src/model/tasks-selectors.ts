import type {TasksState} from '@/model/tasks-reducer.ts'
import type {RootState} from '@/app/store'

export const selectTasks = (state: RootState): TasksState => state.tasks
