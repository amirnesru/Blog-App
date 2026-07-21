import Blogcard from "../components/BlogCard";
import ErrorMessage from "../components/ErrorMessage";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { postsAtom } from "../atoms/postAtoms";
function Home() {
  const [apiPosts, setApiPosts] = useState([]);
  const [createdPosts] = useAtom(postsAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((data) => {
        setApiPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className="loading-state">Loading fresh stories...</div>;
  }
  if (error) {
    return <ErrorMessage />;
  }
  const posts = [...createdPosts, ...apiPosts];
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
