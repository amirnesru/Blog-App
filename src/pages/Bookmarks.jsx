import React from "react";
import { Link } from "react-router-dom"; 
import { FaRegBookmark } from "react-icons/fa"; // Changed fa6 to fa

function Bookmarks() {
    return (
        <div className="bookmarks">
            <FaRegBookmark />
            <h2>No Bookmark Posts yet</h2>
            <p>save articles you want to read later by clicking the book mark icons on any post preview</p>
            <Link to={"/"}  className="bookmark-btn">Browse Latest posts</Link>
        </div>
    )
}
export default Bookmarks;
