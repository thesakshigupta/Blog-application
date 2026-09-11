import { verifyToken } from "../utils/jwthandle.js";
import { sendRes} from "../utils/sendRes.js";


export const authentication = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return sendRes(res, 401, "Unauthorized! Please log in.", "error", null);
        }
        const decode = verifyToken(token);
        req.user = decoded;
        next()
    } catch (error) {
        return sendRes(res, 401, "Unauthorized! or Internal Server Error", "error", null)
    }
}

