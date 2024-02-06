import express from "express";
const router = express.Router();
import { register } from "../controller/authController";

router.route("/register").post(register);
