import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h2>CJ Website</h2>
        <p>Explore my collection of photos and posts.</p>
        <div className="home-links">
          <Link to="/gallery" className="home-link">View Gallery</Link>
          <Link to="/archive" className="home-link">Browse Essay Archive</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
