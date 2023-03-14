import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER
export const register = async (req, res) => {
    try{
        const{
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt = await bcrypt.genSalt();   //use this salt to encrypt the password
        const passwordHash = await bcrypt.hash(password, salt); 

        //encrypt - save - provide password - correct? - issue jsonwebtoken
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location, 
            occupation,
            viewedProfile: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // 201 - Status code - something's created
        // data is sent to frontend in json format
    }
    catch(err){
        res.status(500).json({ error: err.message }); //500 - Status code - Something's wrong - dispkay error message (from DB)
    }
};



// LOGIN

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;       
        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: "User doesn't exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    }
    catch(err){
        res.status(500).json({ error: err.message }); //500 - Status code - Something's wrong - dispkay error message (from DB)
    }
};