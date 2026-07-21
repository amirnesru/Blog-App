import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";

function Blogcard({ post }) {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const isBookmarked = bookmarks.some((b) => b.id === post.id);

  function toggleBookmark(e) {
    e.stopPropagation(); 
    e.preventDefault();  
    
    if (isBookmarked) {
      
      setBookmarks(bookmarks.filter((b) => b.id !== post.id));
    } else {
      setBookmarks([...bookmarks, post]);
    }
  }

  return (
    <Link to={`/blog/${post.id}`} className="blog-card">
      <div className="head">
        <div className="tags-container">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag-pill">#{tag}</span>
          ))}
        </div>
        <button className="save-bookmarks" onClick={toggleBookmark}>
          {isBookmarked ? <PiBookmarkSimpleFill style={{ color: "#1d4ed8" }} /> : <PiBookmarkSimpleThin />}
          Bookmarks
        </button>
      </div>

      <h3 className="blog-name">{post.title}</h3>
      <p className="blog-dicr">{post.body|| post.content}</p>
      <span className="read-more">READ MORE ➜</span>
    </Link>
  );
}

export default Blogcard;
