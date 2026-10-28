import { toggleFollow } from "../services/follow.api.js";

export function useFollow() {
  async function handleFollow(userId) {
    const res = await toggleFollow(userId);
    return res;
  }

  return { handleFollow };
}
