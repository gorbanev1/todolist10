import {RootState} from "./store.ts";
import {ThemeMode} from './app-reducer.ts'

export const selectTheme =(state: RootState): ThemeMode=>state.theme.themeMode