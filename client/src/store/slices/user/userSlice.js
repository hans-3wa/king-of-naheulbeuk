import {createSlice} from '@reduxjs/toolkit'
import {personages} from "../../../data/personages";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        hero: personages[5]
    },
    reducers: {
        addHero: (state, action) => {
            return {
                ...state,
                hero: {...action.payload.hero, pseudo: action.payload.pseudo}
            }
        },
        updateStatHero: (state, action) => {
            return{
                ...state,
                hero : {...state.hero, shield: action.payload.shield, attack: action.payload.attack}
            }
        }
    }
})

export const {addHero,updateStatHero} = userSlice.actions

export default userSlice.reducer