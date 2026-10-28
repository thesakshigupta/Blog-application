import { useDispatch } from 'react-redux';
import { createBlog, deleteBlog, getMyBlogs, getAllBlogs, updateBlog } from '../services/blog.api.js';
import { setBlogs, setMyBlogs } from '../lib/redux/blogSlice';

export function useBlog() {
  const dispatch = useDispatch();

  async function handleCreateBlog({ heading, content }) {
    try {
      const res = await createBlog({ heading, content });
      if (res.status === 'success') {
        // Refresh all blogs
        handleGetAllBlogs();
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message || 'Failed to create blog' };
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.message ||
        err.message ||
        'Failed to publish article';
      return { success: false, error: errorMsg };
    }
  }

  async function handleDeleteBlog(blogId) {
    try {
      const res = await deleteBlog(blogId);
      if (res.status === 'success') {
        // Refresh all blogs
        handleGetAllBlogs();
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message || 'Failed to delete' };
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || 'Failed to delete';
      return { success: false, error: errorMsg };
    }
  }

  async function handleGetMyBlogs() {
    try {
      const res = await getMyBlogs();
      if (res.status === 'success') {
        dispatch(setMyBlogs(res.data || []));
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  async function handleGetAllBlogs() {
    try {
      const res = await getAllBlogs();
      if (res.status === 'success') {
        dispatch(setBlogs(res.data || []));
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  async function handleUpdateBlog(blogId, { heading, content }) {
    try {
      const res = await updateBlog(blogId, { heading, content });
      if (res.status === 'success') {
        handleGetAllBlogs();
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message };
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || 'Failed to update';
      return { success: false, error: errorMsg };
    }
  }

  return {
    handleCreateBlog,
    handleDeleteBlog,
    handleGetMyBlogs,
    handleGetAllBlogs,
    handleUpdateBlog,
  };
}
