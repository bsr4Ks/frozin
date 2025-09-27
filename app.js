import express from 'express'
import { connectDb } from './db.js'
// import { configDotenv } from 'dotenv'

const app = express()
const port = 3000

// configDotenv()

// connect to MongoDb
connectDb()


app.get("/", (req,res) => {
    res.send("hello, world!")
})


const callback = () => {
    console.log(`listening on port ${port}`);
}

app.listen(port, callback)