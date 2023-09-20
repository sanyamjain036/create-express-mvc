import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose.connect(uri, { useNewUrlParser: true });
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
};

export default connectDB;
