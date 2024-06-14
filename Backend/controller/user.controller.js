import User from "../model/user.model.js";
import bcrypt from 'bcrypt'; // Added bcrypt

export const createUser = async (req, res) => {
    try {
        const { username, name, email, password } = req.body; // Added username
        const existingUser = await User.find({ email });
        if (existingUser.length > 0) {
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

// export const getUsers = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.find({ email }); // Only find by email

//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password); // Compare passwords

//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         } else {
//             return res.status(200).json({
//                 message: "Users fetched successfully", users: {
//                     _id: user._id,
//                     username: user.username,
//                     name: user.name,
//                     email: user.email
//                 }
//             });
//         }
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const getUsers = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email }); // Use findOne to get a single user

//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password); // Ensure both arguments are provided

//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         } else {
//             return res.status(200).json({
//                 message: "Users fetched successfully", users: {
//                     _id: user._id,
//                     username: user.username,
//                     name: user.name,
//                     email: user.email
//                 }
//             });
//         }
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
//     //     try {
//     //         const { email, password } = req.body;
//     //         const user = await User.findOne({ email });
//     //         if (!user) {
//     //             return res.status(400).json({ message: "Invalid credentials" });
//     //         }

//     //         const isMatch = await bcrypt.compare(password, user.password);
//     //         if (!isMatch) {
//     //             return res.status(400).json({ message: "Invalid credentials" });
//     //         }

//     //         // Proceed with authentication success logic
//     //     } catch (error) {
//     //         res.status(500).json({ message: error.message });
//     //     }
// };

// Rename getUsers to authenticateUser for clarity
export const authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        } else {
            return res.status(200).json({
                message: "Authentication successful", user: {
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
};