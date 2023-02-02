import mongoose from "mongoose";

const dutyChangeSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  duty: { type: mongoose.Schema.Types.ObjectId, ref: "duty" },

  isApproved: {
    type: Boolean,
  },
  isReject: {
    type: Boolean,
  },
  approvedBy: {
    type: String,
  },
  rejectedBy: {
    type: String,
  },
});
const DutyChange = mongoose.model("dutyChange", dutyChangeSchema);
export default DutyChange;
