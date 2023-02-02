import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  loginUsers,
  registerUsers,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/getUsers", getUsers);
userRouter.post("/register", registerUsers);
userRouter.post("/login", loginUsers);
userRouter.get("/getUser/:id", getUserById);
userRouter.delete("/delete/:id", deleteUser);
userRouter.put("/update/:id", updateUser);

export default userRouter;
