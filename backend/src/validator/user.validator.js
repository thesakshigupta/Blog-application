import {email, z} from "zod";

export const registerValidator = z.object({
    username: z.string({ required_error: "username is required"}).min(3, "UserName must be at least 3 charcters long"),
    email: z.string({ required_error:"email is required"}).email("Please enter a valid email address"),
   password: z.string({ required_error: "Password is required"}).min(6, "password must be at least 6 characters long")
})


export const loginValidator = z.object({
    username: z.string({required_error: "username is required"}).min(3, "UserName must be at least 3 characters"),
    email:z.string({ required_error: "email is required"}).email("please enter the valid email address"),
    password: z.string({ required_error: "password is required"}).min(6, "password  must be at least 6 character ").max(20, "password must be at least 20 characters")

})





