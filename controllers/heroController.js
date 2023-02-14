import {heros} from "../data/heros.js";

export const getHeros = (req, res) => {
    res.send(heros)
}