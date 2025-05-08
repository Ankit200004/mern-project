import mongoose from "mongoose"

const connectToDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('✅ MongoDB is connected succcessfully.');
    } catch (e) {
        console.log("ERR: ❌", e);
    }
}

export default connectToDB;