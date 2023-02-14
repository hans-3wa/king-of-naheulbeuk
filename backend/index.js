import express from "express"
import router from "./routes/heros.js";

const app = express()
const PORT = 5500

app.use('/heros', router)


app.listen(PORT, () => {
    console.log(`Server running at port : http://localhost:${PORT}`)
})