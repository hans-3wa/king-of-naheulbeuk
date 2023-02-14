import express from 'express'
import {getHeros} from "../controllers/heroController.js";

const router = express.Router()

router.get('/', getHeros)


export default router