import { like } from "../services/like.api.js";

export async function useLike() {
    async function handleLike() {
        const res = await like()
        return  res.data
    }

    return {handleLike}
}

