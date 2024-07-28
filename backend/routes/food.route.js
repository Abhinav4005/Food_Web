import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/food.controller.js";

const router = express.Router();

// image storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({storage: storage });

router.post("/add",upload.single("image"),addFood);

router.get("/list", listFood);

router.post("/remove",removeFood);

export default router;