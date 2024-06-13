import mongoose from "mongoose";
import User from "../model/user.model.js";

export const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
    });

    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
