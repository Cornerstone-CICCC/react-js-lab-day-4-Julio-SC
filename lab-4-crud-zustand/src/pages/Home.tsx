import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog App 📝</h1>
      <p className="text-gray-600 mb-6">
        This is a simple multi-page CRUD blog built with React and Zustand.
      </p>
      <button
        onClick={() => navigate("/blog")}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Go to Blog
      </button>
    </div>
  );
};

export default Home;
