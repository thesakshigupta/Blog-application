import api from "./api.js";

export const like = () => {
    try{
        const res = api.get("/like/likeUnlikePostController")
        return res.data
    }
    catch (error) {
        console.error(error);
    }    
}


