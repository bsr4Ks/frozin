import User from "../models/userModel.js"


export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Both username and password are required' });
    }

    const user = await User.findOne({username: username})
    console.log(user);

    if (user) {
      return res.status(400).json({error: 'Username already exists.'})
    }
    
    const newUser = new User({
      username: username,
      password: password
    })
    
    newUser.save()
    
    // For now, just echo back the data
    return res.status(200).json({ message: 'Registered', data: req.body });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
