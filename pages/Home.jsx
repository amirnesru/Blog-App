import Blogcard from "../components/BlogCard"
import React from "react"
function Home(){
    const blogs = [
        {id: 1,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." },
        {id: 2 ,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." },
        {id: 3,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." },
        {id: 4 ,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." },
        {id: 5,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." },
        {id: 6 ,
        name: "futher ethics in age of silcone",
        description: "A mini React application where users can browse blog posts fetche from a real API, view full post details with comments,  and bookmark their favorites." }
        
    ]
        return(
            <div className="home">
                <div className="blog-grid">
                    {blogs.map((blog) => 
                        <Blogcard blog = {blog} key = {blog.id} />)}
                </div>

            </div>
        )
}

export default Home