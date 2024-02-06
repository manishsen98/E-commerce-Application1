import mongoose from "mongoose";

const connectDB = (url) => {
  try {
    return mongoose.connect(url).then(() => console.log("DB connect"));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
