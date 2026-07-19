import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-router-dom"; 
import { FaRegBookmark } from "react-icons/fa";
import { bookmarksAtom } from "../atoms/bookmarkAtoms"; 
import Blogcard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);
  if (bookmarks.length === 0) {
    return (
      <div className="bookmarks">
        <FaRegBookmark />
        <h2>No Bookmark Posts yet</h2>
        <p>save articles you want to read later by clicking the book mark icons on any post preview</p>
        <Link to="/" className="bookmark-btn">Browse Latest posts</Link>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home-container">
        <div className="stories-header">
          <div>
            <h2>Bookmarked Stories</h2>
            <p>Your curated collection of articles and insights saved for later</p>
          </div>
        </div>
        
        <div className="blog-grid">
          {bookmarks.map((post) => (
            <Blogcard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
