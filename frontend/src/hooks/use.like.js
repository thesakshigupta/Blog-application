import { toggleLike } from "../services/like.api.js";

export function useLike() {
  async function handleLike(blogId) {
    const res = await toggleLike(blogId);
    return res;
  }

  return { handleLike };
}
