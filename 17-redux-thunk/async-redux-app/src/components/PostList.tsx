import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from '../features/posts/redux/postSlice';
import { RootState, AppDispatch } from '../store/store';
import ClockLoader from "react-spinners/ClockLoader";

const PostList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, loading, error } = useSelector((state: RootState) => state.posts);

    // Fetch posts on component mount
    useEffect(() => {
        dispatch(fetchPostsThunk());
    }, [dispatch]);

    if (loading) {
        return <ClockLoader color='#36d7b7' />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} className="mb-4 border p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default PostList;