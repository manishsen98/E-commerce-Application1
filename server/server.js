import express from "express";
const app = express();

import bodyParser from "body-parser";
import morgan from "morgan";

import cors from "cors";
app.use(cors());

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

// // middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//

// connect Db
import connectDB from "./db/connect.js";

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => [console.log(`server is running ${port}...`)]);
  } catch (error) {
    console.log(error);
  }
};

start();
