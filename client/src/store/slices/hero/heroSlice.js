import {createSlice, current} from '@reduxjs/toolkit'
import {personages} from "../../../data/personages";

export const heroSlice = createSlice({
    name: 'heroSlice',
    initialState: {
        heros: personages
    },
    reducers: {

        removeHero: (state, action) => {
            return{
                ...state
            }
        }
    }
})

export const {removeHero} = heroSlice.actions

export default heroSlice.reducer