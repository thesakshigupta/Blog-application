import api from "./api.js";

export const follow = () => {
    try{
   const res = api.get("/lfollow/followUnfollowUserController")
   return res.data
   } catch (error) {
    console.error(error);
   }
}



