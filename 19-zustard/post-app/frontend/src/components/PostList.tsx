import React, { useEffect, useState } from 'react';
import { usePostStore } from '../store/usePostStore';
import { Trash2, Edit2, Check, X } from 'lucide-react';
import ClockLoader from 'react-spinners/ClockLoader';

const PostList: React.FC = () => {
  const { posts, loading, error, fetchPosts, deletePost, updatePost } = usePostStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const startEditing = (id: string, title: string, body: string) => {
    setEditingId(id);
    setEditTitle(title);
    setEditBody(body);
  };

  const saveEdit = async () => {
    if (editingId) {
      await updatePost(editingId, { title: editTitle.trim(), body: editBody.trim() });
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditBody('');
  };

  if (loading) {
    return <ClockLoader color="#36d7b7" />;
  }

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 min-w-full">
      <h1 className="text-3xl font-bold text-center my-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            {editingId === post._id ? (
              <>
                {/* Editing Mode */}
                <div>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <textarea
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    className="w-full mb-2 p-2 border rounded"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <button onClick={saveEdit} className="p-2 text-green-600 hover:text-green-800">
                    <Check size={20} />
                  </button>
                  <button onClick={cancelEdit} className="p-2 text-red-600 hover:text-red-800">
                    <X size={20} />
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Viewing Mode */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                  <p className="text-gray-700">{post.body}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="p-2 text-blue-600 hover:text-blue-800"
                    onClick={() => startEditing(post._id, post.title, post.body)}
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    className="p-2 text-red-600 hover:text-red-800"
                    onClick={() => deletePost(post._id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
