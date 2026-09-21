import { createcomment } from "../services/comment.api.js";

 export async function useComment() {
       async function handleCreateComment({comment}) {
          const res = await createcomment({comment})
          return res.data
       }
       
     return {handleCreateComment}  
}

