import { create } from 'zustand';
import axios from 'axios';

export interface Post {
  _id: string;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => void;
  createPost: (post: Omit<Post, '_id'>) => Promise<void>;
  updatePost: (id: string, post: Omit<Post, '_id'>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

const URL = 'http://localhost:8000/api/posts';
// Zustand store for managing posts and CRUD operations
export const usePostStore = create<PostState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  // Fetch all posts
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(URL);
      set({ posts: response.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false, error: 'Error fetching posts' });
    }
  },

  // Create a new post
  createPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(URL, post);
      set((state) => ({
        posts: [...state.posts, response.data],
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      set({ loading: false, error: 'Error creating post' });
    }
  },

  // Update a post
  updatePost: async (id, updatedPost) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`${URL}/${id}`, updatedPost);
      set((state) => ({
        posts: state.posts.map((post) => (post._id === id ? response.data : post)),
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      set({ loading: false, error: 'Error updating post' });
    }
  },

  // Delete a post
  deletePost: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${URL}/${id}`);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      set({ loading: false, error: 'Error deleting post' });
    }
  },
}));
