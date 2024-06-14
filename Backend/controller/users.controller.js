// import User from "../model/user.model.js";
// import bcrypt from 'bcrypt'; // Added bcrypt


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