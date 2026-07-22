import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { BiLike, BiDislike } from "react-icons/bi";
import { useAtom } from "jotai";
import { postsAtom } from "../atoms/postAtoms";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import { PiBookmarkSimpleFill } from "react-icons/pi";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)
  const [createdPosts] = useAtom(postsAtom);;
const isBookmarked = bookmarks.some((b) => b.id === post?.id);

  function toggleBookmark() {
  if (!post) return;
  if (isBookmarked) {
    setBookmarks(bookmarks.filter((b) => b.id !== post.id));
  } else {
    setBookmarks([...bookmarks, post]);
  }
}
  useEffect(() => {
      const createdPost = createdPosts.find(
    (p) => p.id === Number(id)
  );

  if (createdPost) {
    setPost(createdPost);
    setComments([]);
    setLoading(false);
    return;
  }

    Promise.all([
      fetch(`https://dummyjson.com/posts/${id}`),
      fetch(`https://dummyjson.com/posts/${id}/comments`),
    ])
      .then(async ([postRes, commentsRes]) => {
        if (!postRes.ok || !commentsRes.ok) throw new Error();
        const postData = await postRes.json();
        const commentsData = await commentsRes.json();

        setPost(postData);
        setComments(commentsData.comments || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="loading-state">Loading fresh narrative...</div>;

  return (
    <div className="home">
      <div className="home-container detail-page-wrapper">
        <div className="detail-header-actions">
          <Link to="/" className="back-link-btn">
            ← Back to home
          </Link>
        </div>

        <article className="article-body-wrapper">
          <div className="head">
            <div className="tags-container">
              {post?.tags?.map((tag, index) => (
                <span key={index} className="tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
            <button className="save-bookmarks" onClick={toggleBookmark}>
  {isBookmarked ? <PiBookmarkSimpleFill style={{ color: "#1d4ed8" }} /> : <PiBookmarkSimpleThin />}
  Bookmarks
</button>
          </div>

          <h1 className="article-main-title">{post?.title}</h1>

          {post?.image && (
            <div className="article-cover-frame">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <p className="article-paragraph-lead">{post?.body || post.content}</p>
          <div className="post-reactions">
            <span className="reaction-badge likes">
              <BiLike /> {post?.reactions?.likes || 0}
            </span>
            <span className="reaction-badge dislikes">
              <BiDislike /> {post?.reactions?.dislikes || 0}
            </span>
          </div>
        </article>

        <section className="article-comments-block">
          <h3>Comments ({comments.length})</h3>
          <div className="comments-stack">
            {comments.map((comment) => (
              <div key={comment.id} className="blueprint-comment-card">
                <span className="commenter-username">
                  @{comment.user.username}
                </span>
                <p className="commenter-text">{comment.body}</p>
            
                  <span className="reaction-badge likes">
                    <BiLike /> {comment?.likes || 0}
                  </span>
                </div>
        
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogDetail;
