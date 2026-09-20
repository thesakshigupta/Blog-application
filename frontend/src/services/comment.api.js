import api from "./api.js";

export const createcommentController = (data) => {
    try{
        const res = api.post("/comment/createcommentController", data)
        return res.data
    }
    catch (error) {
        console.error(error);
    }
}