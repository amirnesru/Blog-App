// import { Link } from "react-router-dom";

function Blogcard({ post }) {
  return (
    <div className="blog-card">
      <div className="tags-container">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag-pill">
            #{tag}
          </span>
        ))}
      </div>

      <h3 className="blog-name">{post.title}</h3>

      <p className="blog-dicr">{post.body}</p>

      <span className="read-more">READ MORE ➜</span>
    </div>
  );
}

export default Blogcard;
