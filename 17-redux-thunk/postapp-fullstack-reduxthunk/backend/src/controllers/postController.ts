import { Request, Response } from 'express';
import Post, { IPost } from '../models/postModel';

// Fetch all posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    if (!posts) {
        res.status(404).json({ message: 'Posts not found' });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

//fetch a post
export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a post
export const createPost = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  try {
    const post = new Post({ title, body });
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' });
  }
};

// Update a post
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const post = await Post.findById(id);
    if (post) {
      post.title = title;
      post.body = body;
      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating post' });
  }
};

// Delete a post
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (post) {
      await post.deleteOne();
      res.json({ message: 'Post removed' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};