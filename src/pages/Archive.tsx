import { useState } from "react";
import { Link } from "react-router-dom";
import "./Archive.css";

const posts = [
  "first-post.md",
  "a-day-in-the-life.md",
  "city-scapes.md",
  "nature-walk.md",
];

function Archive() {
  const [filter, setFilter] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="archive-container">
      <h1>Archive</h1>
      <input
        type="text"
        placeholder="Filter posts..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      <ul className="archive-list">
        {filteredPosts.map((post) => (
          <li key={post}>
            <Link to={`/posts/${post}`}>
              <span className="post-title">{post.replace(".md", "")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
