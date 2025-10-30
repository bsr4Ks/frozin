import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// load environment variables
configDotenv()

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        //console.log("connected to MongoDB");
        
    } catch (error) {
        console.log(error);

    }
}
