import mongoose from "mongoose";

const leaveSchema = mongoose.Schema({
  fromDate: {
    type: Date,
    default: Date.now,
  },

  toDate: {
    type: Date,
    default: Date.now,
  },
  leaveType: {
    type: String,
  },
  serialNumber: {
    type: Number,
  },
  reason: {
    type: String,
  },
  covering: {
    type: String,
  },
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
const Leave = mongoose.model("leave", leaveSchema);
export default Leave;
