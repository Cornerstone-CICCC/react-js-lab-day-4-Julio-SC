import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/post.store";

const BlogList = () => {
  const navigate = useNavigate();
  const posts = usePostStore((state) => state.posts);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Listing</h1>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        onClick={() => navigate("/blog/new")}
      >
        Create New Post
      </button>

      {posts.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border border-gray-700 p-6 rounded bg-gray-800 text-white shadow-md"
            >
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {post.published ? "Published" : "Draft"}
              </p>
              <button
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
