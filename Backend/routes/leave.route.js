import express from "express";
import {
  getLeaves,
  getLeavesbySNumber,
  saveLeaves,
  updateLeave,
} from "../controllers/leave.controller.js";

const leaveRouter = express.Router();

leaveRouter.get("/getLeaves", getLeaves);
leaveRouter.get("/getLeavesbySNumber", getLeavesbySNumber);
leaveRouter.post("/saveLeaves", saveLeaves);
leaveRouter.put("/updateLeave", updateLeave);

export default leaveRouter;
