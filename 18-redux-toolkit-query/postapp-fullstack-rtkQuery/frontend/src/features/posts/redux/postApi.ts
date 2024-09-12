import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  _id: string;
  title: string;
  body: string;
}

// Create the API Slice
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: (result) =>
        result
          ? [...result.map(({ _id }) => ({ type: 'Post', id: _id } as const)), 'Post']
          : ['Post'],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<Post, { id: string; post: Partial<Post> }>({
      query: ({ id, post }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = postApi;
