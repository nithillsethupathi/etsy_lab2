import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.js";

export const signin = async (req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "User does not exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '3h'});

        res.status(200).json({result: existingUser, token});

    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const signup = async (req, res) => {
    const {fullName, email, password, confirmPassword} = req.body;
    try {
        const existingUser = await User.findOne({email});

        if (existingUser) return res.status(400).json({message: "User already exists"});

        if(password != confirmPassword) return res.status(400).json({message: "Passwords do not match"});

        const hashPassword = await bcrypt.hash(password, 12);
        const result = await User.create({email, password: hashPassword, fullName: fullName});
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '3h'});
        res.status(200).json({result: result, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No User");

    const updatedUser = User.findByIdAndUpdate(_id, user, {new: true});

    res.json(updatedUser);
}