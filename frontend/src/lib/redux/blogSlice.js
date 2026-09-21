import {createSlice} from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        user: [],
        blog: [],
        input: "",
        like:[],
        comment:[],
        follow:[]
    },
    reducers: {
        setUser: (state, action)  => {
            state.user = [...action.payload]
        },
        setBlog: (state, action) => {
              state.blog = [...action.payload]
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setLike: ( state, action) => {
            state.like =[...action.payload]
        },
        setComment: (state, action) => {
            state.comment = [...action.payload]
        },
        setFollow: (state, action) => {
            state.follow = [...action.payload]
        }
    }
})


export default blogSlice.reducer
export const{setBlog, setComment, setFollow, setInput,setUser, setLike} = blogSlice.actions