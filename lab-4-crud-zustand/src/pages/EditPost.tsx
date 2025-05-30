import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/post.store";
import toast from "react-hot-toast";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = usePostStore((state) => state.getPostById(id || ""));
  const updatePost = usePostStore((state) => state.updatePost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !title || !content) return;
    updatePost(id, title, content);
    toast.success("Post updated!");
    navigate(`/blog/${id}`);
  };

  if (!post) {
    return (
      <div className="p-4">
        <h1 className="text-xl">Post not found</h1>
      </div>
    );
  }

  return (
  <div className="p-4 flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 w-full max-w-2xl"
    >
      <label className="flex flex-col col-span-1">
        <span className="mb-1 font-medium">Post Title</span>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
      </label>

      <div className="flex items-end justify-end col-span-1">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>

      <label className="flex flex-col col-span-2">
        <span className="mb-1 font-medium">Post Content</span>
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-3 py-2 rounded resize-y"
          rows={10}
          required
        />
      </label>
    </form>
  </div>
);

};

export default EditPost;
