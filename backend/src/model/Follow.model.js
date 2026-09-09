import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
    
    followTo: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: [true, "Follow To is required"]
    },
    
    followFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Follow From is required"],
    }

}, {timestamps: true});

const followModel = mongoose.model("follow", followSchema);
export default followModel;

