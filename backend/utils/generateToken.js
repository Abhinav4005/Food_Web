import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const generateTokenAndSetCookie =(userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{
        expiresIn:"6d",
    })

    res.cookie("jwt",token,{
        maxAge:6*24*60*60*1000,
        httpOnly:true,
        sameSite:true,
    })
}

export default generateTokenAndSetCookie;