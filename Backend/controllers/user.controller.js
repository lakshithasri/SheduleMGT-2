import User from "../model/user.model.js";

//Fetch All Users
export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//SignUp Users
export const registerUsers = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .send({ status: "200", message: "Succesfully Created User" });
  } catch (error) {
    res.status(500).send({ status: "500", message: error });
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { serialNumber, password } = req.body;

    const user = await User.findOne({
      serialNumber: serialNumber,
      password: password,
    });

    if (user != "") {
      res.status(200).send({ message: "Success", user: user });
    } else {
      res.status(200).send({ message: "Success", user: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.find({ serialNumber: id });
    if (user != "") {
      res.status(200).send({ message: "Success", user: user });
    } else {
      res.status(200).send({ message: "Success", user: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { fullName, mobile, password } = req.body;
  const updateUser = { fullName, mobile, password };
  try {
    const user = await User.findOneAndUpdate({ serialNumber: id }, updateUser);
    if (user != "") {
      res.status(200).send({ message: "Success", user: user });
    } else {
      res.status(200).send({ message: "Success", user: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.deleteOne({ serialNumber: id });
    if (user != "") {
      res.status(200).send({ message: "Success", user: user });
    } else {
      res.status(200).send({ message: "Success", user: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
