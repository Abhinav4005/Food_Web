import mongoose from "mongoose";

const connectToMongo =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connect with database");
    } catch (error) {
        console.log("Error in database connection",error.message);
    }
}

export default connectToMongo;