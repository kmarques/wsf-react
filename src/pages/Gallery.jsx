import React from "react";
import Header from "../layouts/Header";

const images = [
  { id: 1, src: "https://picsum.photos/200/300?random=1", name: "Image 1" },
  { id: 2, src: "https://picsum.photos/200/300?random=2", name: "Image 2" },
  { id: 3, src: "https://picsum.photos/200/300?random=3", name: "Image 3" },
  { id: 4, src: "https://picsum.photos/200/300?random=4", name: "Image 4" },
];

export default function Gallery() {
  return (
    <div>
      {images.map((item) => (
        <img key={item.id} src={item.src} alt={item.name} />
      ))}
    </div>
  );
}
