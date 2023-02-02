import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  fName: {
    type: String,
    required: false,
  },
  lName: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Test", testSchema);
