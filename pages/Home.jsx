import Blogcard from "../components/BlogCard";
import React from "react";
function Home() {
  const blogs = [
    {
      id: 1,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
    {
      id: 2,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
    {
      id: 3,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
    {
      id: 4,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
    {
      id: 5,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
    {
      id: 6,
      name: "futher ethics in age of silcone",
      description:
        "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites.",
    },
  ];
  return (
    <div className="home">
      <div className="intro">
        <h1>welcome to InkWell</h1>
        <p>a place where stories are written, ideas are shared, and thoughts come to life.</p>
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
        {blogs.map((blog) => (
          <Blogcard blog={blog} key={blog.id} />
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
