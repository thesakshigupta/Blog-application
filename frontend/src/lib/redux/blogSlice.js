import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    user: null,
    isLoggedIn: false,
    blogs: [],
    myBlogs: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setMyBlogs: (state, action) => {
      state.myBlogs = action.payload;
    },
  }
});

export default blogSlice.reducer;
export const { setUser, clearUser, setBlogs, setMyBlogs } = blogSlice.actions;
