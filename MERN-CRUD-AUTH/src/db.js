import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://stvnmc123:O2US2hDAsPdzXXEJ@cluster0.hlnu4xp.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB is connect");
  } catch (error) {
    console.log(error);
  }
};
