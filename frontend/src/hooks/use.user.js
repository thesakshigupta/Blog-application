import React from 'react'
import { login, signup, getUser, logout} from '../services/user.api'

export async function useuser() {
    async function handleSignup({username, email, password}) {
        const res = await signup({username, email, password})
        return res.data
    }


    async function handlelogin({username, email, password}) {
            const res = await login({username, email, password})
            return res.data
        }
    
    async function handlegetUser() {
        const res = await getUser()
        return res.data
    } 

    async function handlelogout() {
        const res = await logout()
        return res.data
    }

    return {handleSignup, handlelogin, handlegetUser, handlelogout}
}




