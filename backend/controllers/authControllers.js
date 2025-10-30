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
    });
    
    newUser.save()  // save'de şifre hashleniyor

    //JWT tekrar login yapmadan giriş için
    const token=jwt.sign(
      {id: newUser._id, email: newUser.email},
      process.env.JWT_TOKEN ,
      {expiresIn: '7d'}
    );

    return res.status(201).json({ 
      message: 'Registered successfully', 
      token,
      user: {
        id: newUser._id,
        email: newUser.email
      }
    });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //username idi?

    if (!email || !password) {
      return res.status(400).json({ error: 'Both email and password are required' });
    }

    const user = await User.findOne({ email });

    console.log(user);
    

    if (!user) {
      return res.status(401).json({ error: 'No user exists. Please register first.' });
    }

    console.log(password);
    console.log(user.password);
    
    const isMatch = await bcrypt.compare(password, user.password); // compare hashed password
    console.log(isMatch);
    
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    //  User is authenticated

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_TOKEN,
      { expiresIn: '7d' }
    );

    return res.status(200).json({ message: 'Login successful', token, user: { id: user._id, email: user.email } });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
