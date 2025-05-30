import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/post.store";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addPost = usePostStore((state) => state.addPost);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    addPost(title, content);
    navigate("/blog");
  };

 return (
  <div className="p-10 flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-12">Add Post</h1>
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-12 gap-y-10 w-full max-w-3xl"
    >
      <label className="flex flex-col col-span-1">
        <span className="mb-4 text-xl font-medium">Post Title</span>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-3 rounded text-lg"
          required
        />
      </label>

      <div className="flex items-end justify-end col-span-1">
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-3 text-lg rounded hover:bg-green-700"
        >
          Create Post
        </button>
      </div>

      <label className="flex flex-col col-span-2">
        <span className="mb-4 text-xl font-medium">Post Content</span>
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-4 py-3 rounded resize-y text-lg"
          rows={12}
          required
        />
      </label>
    </form>
  </div>
);



};

export default AddPost;
