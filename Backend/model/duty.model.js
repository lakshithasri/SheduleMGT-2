import mongoose from "mongoose";

const dutySchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  dutyDate: {
    type: Date,
    required: true,
  },
  fromTime: {
    type: Date,
    required: true,
  },
  toTime: {
    type: Date,
    required: true,
  },
  assignedBy: {
    type: String,
  },
});
const Duty = mongoose.model("duty", dutySchema);
export default Duty;
