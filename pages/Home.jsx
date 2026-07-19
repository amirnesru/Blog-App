import Blogcard from "../components/BlogCard";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setposts] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json()) 
      .then((data) => {
        setposts(data.posts);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
    
  return (
    <div className="home">
      <div className="intro">
        <h1>welcome to InkWell</h1>
        <p>
          a place where stories are written, ideas are shared, and thoughts come
          to life.
        </p>
      </div>
      <div className="stories-header">
        <div className="header"></div>
        <h2>Latest stories</h2>
        <p>Explor fresh stories and insights from our writers</p>
        <div className="btn">
          <Link to="/createpost">+ Create New post</Link>
        </div>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <Blogcard post={post} key={post.id} />
        ))}
      </div>
      <footer className="footer">
        <div className="left">
          <p className="nav-logo">InkWell</p>
          <p className="copyR">&copy;2026 InkWell. All right reserved</p>
        </div>
        <div className="right">
          <div>Privacy policy</div>
          <div>Term of service</div>
          <div>contact</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
