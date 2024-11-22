import express from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { createUser, getCurrentUser } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/create", authCheck, createUser);
userRoutes.get("/current-user-details", authCheck, getCurrentUser);

export { userRoutes };
