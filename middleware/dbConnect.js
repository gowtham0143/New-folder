import mongoose from "mongoose";

const connectDb = handler => async (req, res) => {
    try {
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }

        await mongoose.connect(process.env.MONGO_URI);

        return handler(req, res);
    } catch (error) {
        console.error("Error connecting to database:", error);
        return res.status(500).json({ message: "Database connection error" });
    }
}

export default connectDb;