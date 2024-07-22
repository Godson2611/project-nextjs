import mongoose from "mongoose";

export const connection = async () => {
  mongoose.connect(process.env.DB__URL);
};
