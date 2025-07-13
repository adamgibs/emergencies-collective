import { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "/images/placeholder.jpg", alt: "A placeholder image" },
  { src: "/images/placeholder.jpg", alt: "Another placeholder" },
  { src: "/images/placeholder.jpg", alt: "Yet another one" },
];

function Gallery() {
  const [filter, setFilter] = useState("");

  const filteredImages = images.filter((image) =>
    image.alt.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <input
        type="text"
        placeholder="Filter images..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      <div className="image-grid">
        {filteredImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
