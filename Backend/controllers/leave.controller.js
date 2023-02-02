import Leave from "../model/leave.model.js";

//Fetch All Leaves
export const getLeaves = async (req, res) => {
  try {
    const user = await Leave.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//save Leaves
export const saveLeaves = async (req, res) => {
  try {
    const newLeave = new Leave(req.body);
    await newLeave.save();
    res.status(200).send({ status: "200", message: "Succesfully Saved" });
  } catch (error) {
    res.status(500).send({ status: "500", message: error });
  }
};

//getLeavesby serialNumber
export const getLeavesbySNumber = async (req, res) => {
  const { id } = req.params;
  try {
    const oleave = await Leave.find({ serialNumber: id });
    if (oleave != "") {
      res.status(200).send({ message: "Success" });
    } else {
      res.status(200).send({ message: "Success", user: "Leaves Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//updateLeave
export const updateLeave = async (req, res) => {
  const { id } = req.params;

  const { fromDate, toDate, leaveType, reason, covering } = req.body;
  const updateLeave = { fromDate, toDate, leaveType, reason, covering };
  try {
    const user = await Leave.findOneAndUpdate(
      { serialNumber: id },
      updateLeave
    );
    if (user != "") {
      res.status(200).send({ message: "Update Success" });
    } else {
      res.status(200).send({ message: "Success", user: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
