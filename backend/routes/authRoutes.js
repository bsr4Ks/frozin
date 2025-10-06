import express from "express"
import { loginUser, registerUser } from "../controllers/authControllers.js"

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", loginUser)


router.get('/login', (req, res) => {
  res.status(200).send('Login route is active. Use POST to log in.');
});

router.get('/register', (req, res) => {
  res.status(200).send('Register route is active. Use POST to register.');
});


export default router