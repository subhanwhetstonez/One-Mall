import mongoose from "mongoose";

export async function connect(params) {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
  } catch {
    console.log("Something went wrong");
    console.error(error);
  }
}
