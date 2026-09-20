import api from "./api.js";

export const createblog = (data) => {
    try {
        const res = api.post("/blog/createBlogController", data);
     return res.data
    } catch (error) {
        console.error(error);
    }
     
}

export const deleteblog = () => {
    try {
        const res = api.delete("/blog/deleteblogController")
        return res.data
    } catch (error) {
        console.error(error);
        
    }
}


export const getBlog = () => {
    try {
        const res = api.get("/blog/getBlogController");
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export const getAllBlog = () => {
    try {
        const res = api.get("/blog/getAllBlog")
        return res.data
    } catch (error) {
        console.error(error);
    }
}


export const updateBlog = (data) => {
    try {
        const res = api.put("/blog/updateBlogController", data)
        return res.data
    } catch (error) {
        console.error(error);
    }
}

