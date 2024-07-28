import Food from "../models/food.model.js";
import fs from "fs";
import path from "path";
import { dirname } from 'path';

export const addFood =async(req,res)=>{
    const image_filename = `${req.file.filename}`;
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    try {
        const {name, description, price, category} = req.body;
    
        const food = new Food({
            name:name,
            description:description,
            price:price,
            image:image_filename,
            category:category,
        }) 
        await food.save();
        res.status(200).json({message:"Food Added Successfully"});
    } catch (error) {
        console.log("Error in add controller",error.message);
        res.json(400).json({error:error.message});
    }
}

export const listFood = async(req,res)=>{
    try {
        const foodItem = await Food.find({});
        res.status(200).json({foodItem});
    } catch (error) {
        console.log("Error in listFood controller", error.message);
        res.status(400).json({error:error.message});
    }
}

export const removeFood =async(req,res)=>{
    const foodId = req.body.id; 
    try {
        const food = await Food.findById(foodId);
        // const imagePath = path.join(__dirname, 'uploads', food.image);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await Food.findByIdAndDelete(foodId)
        res.status(200).json({message:"Food Removed"})
    } catch (error) {
        console.log("Error in removeFood controller",error.message);
        res.status(400).json({error:error.message});
    }
}