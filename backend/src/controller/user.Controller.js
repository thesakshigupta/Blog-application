import User from "../model/User.model";
import { sendRes } from "../utils/sendRes";

export async function Register(req, res) {
try {
   const{username, email, password, phone_No, avatar} = req.body
   if(!username || !email || !password ){
     sendRes(res, 400, "All fields are required", "error", data)
   }
    
} catch(error) {
   sendRes(res, 500, "Internal Server Error", "error", null)
}
}

export async function login(){

}

export async function verify(){
    
}

export async function getUser() {
    
}

export async function logout() {
    
}