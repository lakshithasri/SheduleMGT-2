import Duty from "../model/duty.model";

//Fetch All Duty
export const getDuty = async (req, res) => {
    try {
      const duty = await Duty.find();
      res.status(200).send(duty);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //save Duty
  export const saveDuty = async (req, res) => {
    try {
      const newDuty = new Duty(req.body);
      await newDuty.save();
      res
        .status(200)
        .send({ status: "200", message: "Succesfully Saved" });
    } catch (error) {
      res.status(500).send({ status: "500", message: error });
    }
  };

  //getDutybySerialNumber
  export const getDutybySerialNumber = async (req, res) => {
    const { id } = req.params;
    try {
      const oDuty = await Duty.find({ serialNumber: id });
      if (oDuty != "") {
        res.status(200).send({ message: "Success"});
      } else {
        res.status(200).send({ message: "Success", user: "Leaves Not Found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //updateDuty
  export const updateDuty = async (req, res) => {
    const { id } = req.params;
  
    const { dutyDate, fromTime, toTime  } = req.body;
    const updateDuty = { dutyDate, fromTime, toTime  };
    try {
      const duty = await Duty.findOneAndUpdate({ serialNumber: id }, updateDuty);
      if (duty != "") {
        res.status(200).send({ message: "Update Success" });
      } else {
        res.status(200).send({ message: "Success", user: "User Not Found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };