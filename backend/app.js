import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDb } from './db.js'


import authRoutes from "./routes/authRoutes.js"

const origin= "http://localhost:3001"


const app = express()
const port = process.env.PORT || 3000

// middleware to parse json
app.use(express.json())

app.use(cors({origin: origin}))

// connect to MongoDb
connectDb()


app.get("/", (req, res) => {
    res.send("hello from frozen api!")
})

app.use("/api/auth", authRoutes)

//db e bağlandıktan sonra server ı başlat
async function startServer() {
    try { console.log("Connecting to database...") 
    await connectDb()
    console.log("mongodb connected")
    app.listen(port, () => {console.log(`listening on port ${port}`)})
    } catch (error) {
        console.error("Failed to start server:", error)
    process.exit(1)
    }
}

startServer()