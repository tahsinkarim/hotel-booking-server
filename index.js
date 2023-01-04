import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k6fgqcn.mongodb.net/bookingHotel?retryWrites=true&w=majority`;
const connect = async () => {
  try {
    const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k6fgqcn.mongodb.net/bookingHotel?retryWrites=true&w=majority`;
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      strictQuery: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(errors);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

//Middleweres
app.use(cors());
app.use(express.json());

//Route Middleweres
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", function (req, res) {
  res.json(MONGO_URI);
});

app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});
