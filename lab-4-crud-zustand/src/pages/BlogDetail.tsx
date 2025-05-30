import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/post.store";
import toast from "react-hot-toast";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = usePostStore((state) => state.getPostById(id || ""));
  const deletePost = usePostStore((state) => state.deletePost);

  const handleDelete = () => {
    if (id) {
      deletePost(id);
      toast.success("Post deleted!");
      navigate("/blog");
    }
  };

  if (!post) {
    return (
      <div className="p-4">
        <h1 className="text-xl">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <div className="space-x-2">
        <button
          onClick={() => navigate(`/blog/edit/${post.id}`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
