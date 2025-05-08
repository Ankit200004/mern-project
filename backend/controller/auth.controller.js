import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET1|| 'hopesoitcanbebuild';

export const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({ message: "❌ User already exists" })

        const user = new User({ username, email, password })
        await user.save();

        res.status(200).json({ message: "✅ User created Successfully." })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if(!user) return res.status(400).json({ message: "❌ Invalid credentials " })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "❌ Invalid credentials"})

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

        res.json({ token, user: {id: user._id, username: user.username, email: user.email} });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}