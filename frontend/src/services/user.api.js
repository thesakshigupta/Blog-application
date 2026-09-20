import api from "./api.js";



export const signup = async (data) => {
    try {
        const res = await api.post("/user/Register", data);
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export const login = async (data) => {
    try {
        const res = await api.post("/user/loginController", data);
        return res.data
    } catch (error) {
        console.error(error);
        
    }
}

export const getUser = async () => {
    try {
        const res = await api.get("/user/getuser")
        return res.data;
    } catch (error) {
        console.error(error);   
    }
}


export const logout = async () => {
    try {
        const res = await api.get("/user/logout")
        return res.data
    } catch (error) {
        console.error(error);
        
    }
}

