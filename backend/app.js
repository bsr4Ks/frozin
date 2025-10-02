import express from 'express'
import { connectDb } from './db.js'


import authRoutes from "./routes/authRoutes.js"



const app = express()
const port = 3000

// middleware to parse json
app.use(express.json())

// connect to MongoDb
connectDb()


app.get("/", (req, res) => {
    res.send("hello from frozen api!")
})

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})