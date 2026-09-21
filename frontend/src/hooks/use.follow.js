import { follow } from "../services/follow.api.js";

export async function useFollow() {
    async function handleFollow() {
        const res = await follow()
        return res.data
    }

    return {handleFollow}
}
