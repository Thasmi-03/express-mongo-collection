import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";

const app = express();
app.use(express.json());
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/my_app")
      .then(() => console.log(" database is Connecting!"));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express");
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
