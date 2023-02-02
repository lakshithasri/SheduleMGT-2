import express from "express";
import {getDutychange,getDutychangebySerialNumber,saveDutychange} from "../controllers/dutyChange.controller";

const dutyChangeRouter = express.Router();

dutyRouter.get("/getDuty", getDutychange);
dutyRouter.get("/getDutybySerialNumber", getDutychangebySerialNumber);
dutyRouter.get("/saveDuty", saveDutychange);

export default dutyChangeRouter;