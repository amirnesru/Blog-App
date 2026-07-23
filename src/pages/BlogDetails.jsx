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
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const [createdPosts] = useAtom(postsAtom);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);
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
    if (post) {
      setLikes(post.reactions?.likes || 0);
      setDislikes(post.reactions?.dislikes || 0);
      setUserReaction(null);
    }
  }, [post]);
  function handleLike() {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
    } else if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction("like");
    } else {
      setLikes(likes + 1);
      setUserReaction("like");
    }
  }

  function handleDislike() {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else if (userReaction === "like") {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction("dislike");
    } else {
      setDislikes(dislikes + 1);
      setUserReaction("dislike");
    }
  }
  function handleCommentLike(id) {
  setComments(
    comments.map((comment) =>
      comment.id === id
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    )
  );
}
  useEffect(() => {
    const createdPost = createdPosts.find((p) => p.id === Number(id));

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
  }, [id, createdPosts]);

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
              {isBookmarked ? (
                <PiBookmarkSimpleFill style={{ color: "#1d4ed8" }} />
              ) : (
                <PiBookmarkSimpleThin />
              )}
              Bookmarks
            </button>
          </div>

          <h1 className="article-main-title">{post?.title}</h1>

          {post?.image && (
            <div className="article-cover-frame">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <p className="article-paragraph-lead">
            {post?.body || post?.content}
          </p>
          <div className="post-reactions">
            <span
              className="reaction-badge likes"
              onClick={handleLike}
              style={{
                cursor: "pointer",
                color: userReaction === "like" ? "#2563eb" : "",
              }}
            >
              <BiLike /> {likes}
            </span>

            <span
              className="reaction-badge dislikes"
              onClick={handleDislike}
              style={{
                cursor: "pointer",
                color: userReaction === "dislike" ? "#dc2626" : "",
              }}
            >
              <BiDislike /> {dislikes}
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

                <span
                  className="reaction-badge likes"
                  onClick={() => handleCommentLike(comment.id)}
                  style={{ cursor: "pointer" }}
                >
                  <BiLike /> {comment.likes}
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
