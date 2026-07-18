import Blogcard from "../components/BlogCard";
import React from "react";
function Home() {
  const posts = [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think...",
      tags: ["history", "crime"],
      reactions: { likes: 192 },
      userId: 121,
    },
  ];
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
          <button>+ Create New post</button>
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
