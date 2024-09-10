
const BlogGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-12">
      {/* Blog Post 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 1</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolorum doloremque laborum tempore quia, velit, optio enim, voluptatum numquam eligendi ipsam voluptatibus nobis animi doloribus possimus ad consequatur illo voluptates?
          </p>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 2</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Repeat for additional posts */}
       {/* Blog Post 1 */}
       <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 3</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolorum doloremque laborum tempore quia, velit, optio enim, voluptatum numquam eligendi ipsam voluptatibus nobis animi doloribus possimus ad consequatur illo voluptates?
          </p>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 4</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
       {/* Blog Post 1 */}
       <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 5</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolorum doloremque laborum tempore quia, velit, optio enim, voluptatum numquam eligendi ipsam voluptatibus nobis animi doloribus possimus ad consequatur illo voluptates?
          </p>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit">
        <img
          src="https://via.placeholder.com/400"
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Blog Post Title 6</h3>
          <p className="text-gray-700 min-h-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;