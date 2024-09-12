import PostList from '../components/PostList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostList />
    </div>
  );
};

export default Home;