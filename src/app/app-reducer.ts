import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = {
    themeMode: 'light' as ThemeMode,
}
export const changeThemeModeAC=createAction<{mode:ThemeMode}>('app/themeMode')

export type ThemeMode = 'dark' | 'light'

export const appReducer = createReducer(initialState, builder=>{
    builder
        .addCase(changeThemeModeAC, (state, action) => {
            state.themeMode=action.payload.mode
        })
})
