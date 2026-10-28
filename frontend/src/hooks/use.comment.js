import { createComment } from "../services/comment.api.js";

export function useComment() {
  async function handleCreateComment(blogId, comment) {
    const res = await createComment(blogId, { comment });
    return res;
  }

  return { handleCreateComment };
}
