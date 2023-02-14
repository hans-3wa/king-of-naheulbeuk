import {createSlice} from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'stepAction',
    initialState: {
        page: 'register'
    },
    reducers: {
        updatePage: (state, action) => {
            return {
                ...state,
                page: action.payload
            }
        }
    }
})

export const {updatePage} = gameSlice.actions

export default gameSlice.reducer