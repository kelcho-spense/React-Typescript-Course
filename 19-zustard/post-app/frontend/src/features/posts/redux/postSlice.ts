import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPost, updatePost, deletePost } from '../services/postService';

interface Post {
  _id: string;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

// Thunks for CRUD actions
export const fetchPostsThunk = createAsyncThunk('posts/fetchPosts',
  async () => {
    const data = await fetchPosts();
    return data;
  });

export const createPostThunk = createAsyncThunk('posts/createPost',
  async (post: { title: string; body: string }) => {
    const data = await createPost(post);
    return data;
  });

export const updatePostThunk = createAsyncThunk('posts/updatePost',
  async ({ id, post }: { id: string; post: { title: string; body: string } }) => {
    const data = await updatePost(id, post);  // Ensure updatePost is an API call function
    return data;
  }
);


export const deletePostThunk = createAsyncThunk('posts/deletePost', async (id: string) => {
  await deletePost(id);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching posts';
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);
        if (index >= 0) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      });
  },
});

export default postSlice.reducer;