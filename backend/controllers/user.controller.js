import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req,res)=>{
    try {
        const {fullName, email, password, confirmPassword} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password doesn't match"})
        }
        const user = await User.findOne({fullName});

        if(user){
            return res.status(400).json({error:"Name already exist's"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword,
            confirmPassword,
        })
        console.log("newUser -> ",newUser._id.toString());

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();   

            res.status(200).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
            });
        } else{
            res.status(400).json({error:"Inavlid user data"});
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user= await User.findOne({email});
        console.log("User in login controller -> ",user)
        const passwordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !passwordCorrect){
            return res.status(400).json({error:"Inavlid fullName and password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            id:user._id,
            email:user.email,
        })
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}