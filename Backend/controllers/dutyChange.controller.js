import DutyChange from "../model/dutyChange.model";

//Fetch All Duty change
export const getDutychange = async (req, res) => {
    try {
      const dutychange = await DutyChange.find();
      res.status(200).send(duty);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //save Duty change
  export const saveDutychange = async (req, res) => {
    try {
      const newDutychange = new DutyChange(req.body);
      await newDutychange.save();
      res
        .status(200)
        .send({ status: "200", message: "Succesfully Saved" });
    } catch (error) {
      res.status(500).send({ status: "500", message: error });
    }
  };

  //getDutychangebySerialNumber
  export const getDutychangebySerialNumber = async (req, res) => {
    const { id } = req.params;
    try {
      const oDutychange = await DutyChange.find({ serialNumber: id });
      if (oDutychange != "") {
        res.status(200).send({ message: "Success"});
      } else {
        res.status(200).send({ message: "Success", user: "Leaves Not Found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

//   //updateDutychange
//   export const updateDutychange = async (req, res) => {
//     const { id } = req.params;
  
//     const { dutyDate, fromTime, toTime  } = req.body;
//     const updateDutychange = { dutyDate, fromTime, toTime  };
//     try {
//       const duty = await DutyChange.findOneAndUpdate({ serialNumber: id }, updateDuty);
//       if (duty != "") {
//         res.status(200).send({ message: "Update Success" });
//       } else {
//         res.status(200).send({ message: "Success", user: "User Not Found" });
//       }
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   };