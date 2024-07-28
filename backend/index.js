import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectToMongo from "./db/connectToMongo.js";
import foodRoute from "./routes/food.route.js";
import userRoute from "./routes/user.route.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("Setup done ☑️");
    res.send("Welcome to the Food API!");
});

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, 'uploads')));

// Route for food related requests
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);

// Start the server and connect to MongoDB
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try {
        await connectToMongo();
        console.log(`Server started running on port: ${PORT}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});