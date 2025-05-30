// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import BlogList from "../src/pages/BlogList";
import BlogDetail from "../src/pages/BlogDetail";
import AddPost from "../src/pages/Addpost";
import EditPost from "../src/pages/EditPost";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/new" element={<AddPost />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
