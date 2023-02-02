import express from "express";
import {getDuty,getDutybySerialNumber,saveDuty,updateDuty} from "../controllers/duty.controller";

const dutyRouter = express.Router();

dutyRouter.get("/getDuty", getDuty);
dutyRouter.get("/getDutybySerialNumber", getDutybySerialNumber);
dutyRouter.get("/saveDuty", saveDuty);
dutyRouter.get("/updateDuty", updateDuty);

export default dutyRouter;