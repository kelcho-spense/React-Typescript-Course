import axios from 'axios';

const API_URL = 'http://localhost:8000/api/posts';

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPost = async (post: { title: string; body: string }) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (id: string, post: { title: string; body: string }) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};