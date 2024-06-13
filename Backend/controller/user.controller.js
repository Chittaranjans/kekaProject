import User from "../model/user.model.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User(
            {
                name,
                email,
                password
            }
        );
        await newUser.save();
        res.status(201).json({ massage: "User created successfully" });

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ massage: "Users fetched successfully", users });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
