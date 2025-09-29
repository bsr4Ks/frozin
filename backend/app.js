import express from 'express'
import { connectDb } from './db.js'
import { User } from './models/userModel.js'
// import { configDotenv } from 'dotenv'

const app = express()
const port = 3000

// configDotenv()

// connect to MongoDb
connectDb()


app.get("/", (req, res) => {
    const user_1 = new User({
        username: "username1",
        password: "password1"
    })
    try {
        user_1.save()
        res.send(`${user_1.username} is added.`)
    } catch (error) {
        res.send(`${error}`)
    }
    

    
})


const callback = () => {
    console.log(`listening on port ${port}`);
}

app.listen(port, callback)