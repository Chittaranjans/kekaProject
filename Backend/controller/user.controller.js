import User from "../model/user.model.js";
import bcrypt from 'bcrypt'; // Added bcrypt

export const createUser = async (req, res) => {
    try {
        const { username, name, email, password } = req.body; // Added username
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const pass = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, pass); // Added password hashing

        const newUser = new User(
            {
                username, // Added username
                name,
                email,
                password: hashedPassword // Changed password to hashedPassword
            }
        );
        await newUser.save();
        res.status(201).json({ message: "User created successfully" }); // Corrected typo from 'massage' to 'message'

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }); // Only find by email

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password); // Compare passwords

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        } else {
            return res.status(200).json({
                message: "Users fetched successfully", users: {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
            });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}