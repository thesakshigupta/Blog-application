import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 username : {
    type : String,
    required: true,
    unique: true,
    trim : true
},
email : {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
},
password: {
    type: String,
    required: true,
    select: false

},
phone_No: {
    type: Number, 
    required: false,
    default: "000-000-0000"
},
avatar: {
    type: String,
    default: "",
},
}, {timestamps: true}
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;

