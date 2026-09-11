import jwt from "jsonwebtoken";
import env from '../config/env.js'

export const generateToken = (payload) => {
    try {
        return jwt.sign(payload, env.JWT_SECRET, {expiresIn: "2d"});
    } catch (error) {
        throw new Error('Error')
    }
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        return decoded 
    } catch (error) {
        throw new Error('Error')
    }
}

