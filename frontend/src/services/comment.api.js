import api from "./api.js";

export const createcomment = (data) => {
    try{
        const res = api.post("/comment/createcommentController", data)
        return res.data
    }
    catch (error) {
        console.error(error);
    }
}

