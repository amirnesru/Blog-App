function Blogcard({blog}) {
    function readmore(){
        alert("cliked the btn")
    }
    return(
    
    <div className="blog-card">
        <h3 className="blog-name"> {blog.name} </h3>
        <p className="blog-dicr">{blog.description}</p>
        <button className="read-more" onClick={readmore}>READ MORE ➜</button>
    </div>
    
    
    )
}
export default Blogcard