import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";


function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleAction = (e, targetStatus) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill out both the Title and Content fields.");
      return;
    }
    onSubmit({
      title,
      content,
      image,
      status: targetStatus
    });
  };

  return (
    <div className="form-container">
      <h2>write a New post </h2>
      <p>
        clear your mind and let your words take center stage.no distraction,
        just you idea.
      </p>
      
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give your thoughts a name..."
        />
      </div> 

      <div className="image-upload-box">
        <input
          type="file"
          id="cover-image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ display: "none" }}
        />
        <label htmlFor="cover-image" className="upload-label">
          <span className="upload-icon"><FaRegImage /></span>
          <p>Add a cover image (Optional)</p>
        </label>
      </div>

      <div className="form-field"> 
        <div className="field-header">
          <label htmlFor="content">Content</label>
          <span className="word-count">{content.trim() ? content.trim().split(/\s+/).length : 0} words</span>
        </div>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing here. Use the whitespace to find your flow..."
        />
      </div>
      
      <div className="post-btn">
        <button className="save" onClick={(e) => handleAction(e, "draft")}>Save Draft</button>
        <button className="post" onClick={(e) => handleAction(e, "published")}>Publish Post</button>
      </div>
    </div>
  );
}

export default BlogForm;
