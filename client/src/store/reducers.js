import {combineReducers} from "redux";
import gameSlice from "./slices/game/game";
import heroSlice from "./slices/hero/heroSlice";
import userSlice from "./slices/user/userSlice";

const rootReducer = combineReducers({
    game: gameSlice,
    hero: heroSlice,
    user: userSlice
})


export default rootReducer
