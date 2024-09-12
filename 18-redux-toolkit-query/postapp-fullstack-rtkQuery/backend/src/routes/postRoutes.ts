import express from 'express';
import { getPost,getPosts, createPost, updatePost, deletePost } from '../controllers/postController';

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(createPost);
router.route('/:id')
.get(getPost)
    .put(updatePost)
    .delete(deletePost);

export default router;