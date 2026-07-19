import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";
function ErrorMessage() {
    return(
       
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
          <Link to="/createpost">+ Create New post</Link>
        </div>
      </div>

      {/* Styled inline error box layout container */}
      <div className="error-banner">
        <div className="error-left">
          <span className="error-icon"><MdOutlineReportGmailerrorred /></span>
          <div className="error-text-group">
            <strong>Error: Failed to fetch</strong>
            <p>We're having trouble connecting to the server. Please check your connection and try again.</p>
          </div>
        </div>
        <button className="retry-btn" onClick={() => window.location.reload()}>Retry</button>
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

    )
}

export default ErrorMessage