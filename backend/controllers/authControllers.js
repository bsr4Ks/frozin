import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";

configDotenv()

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Both email and password are required' });
    }

    const user = await User.findOne({email: email})
    //console.log(user);

    if (user) {
      return res.status(400).json({error: 'email already exists.'})
    }
    
    const newUser = new User({
      email: email,
      password: password
    })
    
    newUser.save()
    
    // For now, just echo back the data
    return res.status(200).json({ message: 'Registered', data: req.body });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Both username and password are required' });
    }

    const user = await User.findOne({ username }); 

    if (!user) {
      return res.status(401).json({ error: 'No user exists. Please register first.' });
    }

    const isMatch = await bcrypt.compare(password, user.password); // compare hashed password
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    //  User is authenticated

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_TOKEN,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
