import express from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { createUser } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/create", authCheck, createUser);

export { userRoutes };
