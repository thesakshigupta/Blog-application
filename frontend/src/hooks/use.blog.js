import React from 'react'
import { createblog, deleteblog, getBlog, getAllBlog, updateBlog  } from '../services/blog.api.js'


export async function useBlog() {
    async function handlecraeteBlog({heading, content}) {
        const res = await createblog({heading, content})
        return res.data

    }

    async function handledeleteBlog() {
        const res = await deleteblog()
        return res.data
    }

    async function handlegetBlog() {
        const res = await getBlog();
        return res.data
    }

    async function handlegetAllBlog() {
        const res = await getAllBlog()
        return res.data
    }

    async function handleUpdateBlog({heading, content}) {
        const res = await updateBlog({heading, content})
        return res.data
    }


     
    return{handlecraeteBlog, handledeleteBlog, handlegetBlog, handlegetAllBlog, handleUpdateBlog }

}

     

