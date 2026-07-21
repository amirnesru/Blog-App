import React from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { postsAtom } from "../atoms/postAtoms";
import { useAtom } from "jotai";

function CreatePost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useAtom(postsAtom);

  const handlePostSubmit = (formData) => {
    console.log("Post data packet received:", formData);

    if (formData.status === "published") {
      const newPost = {
        ...formData,
        id: Date.now(),
        tags: [],
      };
      setPosts([...posts, newPost]);

      alert("Post published successfully!");
    }

    if (formData.status === "draft") {
      const existingDrafts = JSON.parse(localStorage.getItem("drafts")) || [];

      const updatedDrafts = [...existingDrafts, formData];
      localStorage.setItem("drafts", JSON.stringify(updatedDrafts));

      alert("Draft saved successfully!");
    }

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
