import React from 'react'
import { createblog, deleteblog, getBlog, getAllBlog, updateBlog  } from '../services/blog.api'


export async function userBlog() {
    async function handlecraeteBlog({heading, content}) {
        const res = await createblog({heading, content})
        return res.data

    }

    async function handledeleteBlog() {
        const res = await deleteblog()
        return res.data
    }

    async function handle(params) {
        
    }

    return{handlecraeteBlog, handledeleteBlog }

}

     

