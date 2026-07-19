// import { Link } from "react-router-dom";
import { PiBookmarkSimpleThin } from "react-icons/pi";

function Blogcard({ post }) {
  function addToBookMarks(){
    return(
      alert("the post saved")

    )
  }
  return (
    <div className="blog-card">
      <div className="head">
      <div className="tags-container">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag-pill">
            #{tag}
          </span>
        ))}
      </div>
      <button className="save-bookmarks" onClick={addToBookMarks}><PiBookmarkSimpleThin />Bookmarks</button>
      </div>

      <h3 className="blog-name">{post.title}</h3>

      <p className="blog-dicr">{post.body}</p>

      <span className="read-more">READ MORE ➜</span>
    </div>
  );
}

export default Blogcard;
