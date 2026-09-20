import api from "./api.js";

export const like = () => {
    try{
   const res = api.get("/lfollow/followUnfollowUserController")
   return res.data
   } catch (error) {
    console.error(error);
   }
}



