import React from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

function CreatePost() {
  const navigate = useNavigate();

  const handlePostSubmit = (formData) => {
    console.log("Post data packet received:", formData);
    alert(`Post action triggered as: ${formData.status}`);
    navigate("/"); 
  };

  return (
    <div className="home">
      <div className="home-container">
        <BlogForm onSubmit={handlePostSubmit} />
      </div>
    </div>
  );
}

export default CreatePost;
