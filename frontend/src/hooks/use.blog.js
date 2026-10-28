import { useDispatch } from 'react-redux';
import { createBlog, deleteBlog, getMyBlogs, getAllBlogs, updateBlog } from '../services/blog.api.js';
import { setBlogs, setMyBlogs } from '../lib/redux/blogSlice';

export function useBlog() {
  const dispatch = useDispatch();

  async function handleCreateBlog({ heading, content }) {
    const res = await createBlog({ heading, content });
    return res;
  }

  async function handleDeleteBlog(blogId) {
    const res = await deleteBlog(blogId);
    return res;
  }

  async function handleGetMyBlogs() {
    const res = await getMyBlogs();
    if (res.status === 'success') {
      dispatch(setMyBlogs(res.data));
    }
    return res;
  }

  async function handleGetAllBlogs() {
    const res = await getAllBlogs();
    if (res.status === 'success') {
      dispatch(setBlogs(res.data));
    }
    return res;
  }

  async function handleUpdateBlog(blogId, { heading, content }) {
    const res = await updateBlog(blogId, { heading, content });
    return res;
  }

  return { handleCreateBlog, handleDeleteBlog, handleGetMyBlogs, handleGetAllBlogs, handleUpdateBlog };
}
