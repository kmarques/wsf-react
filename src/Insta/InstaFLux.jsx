import { useState } from "react";
import InstaCard from "./InstaCard";
import data from "./data.json";
import Button from "../components/Button-pro";
import "./InstaFlux.css";
import Modal from "../components/Modal";
import PostForm from "./PostForm";

export default function InstaFlux() {
  const [posts, setPosts] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const filteredData = posts
    .filter(
      (item) =>
        item.user.startsWith(searchValue) ||
        item.tags.some((tag) => tag.startsWith(searchValue)) ||
        item.views.toString().startsWith(searchValue)
    )
    .sort((a, b) => b.views - a.views);

  async function addPost(newPost) {
    // Sauvegarde serveur exemple : await fetch
    setPosts([newPost, ...posts]);
    setOpenModal(false);
  }

  return (
    <div className="insta-flux">
      <h1>Mon flux</h1>
      <input
        className="insta-flux-search"
        placeholder="Search"
        value={searchValue}
        onInput={(event) => setSearchValue(event.target.value)}
      />
      <Button onClick={() => setOpenModal(true)}>Ajouter un post</Button>
      {openModal && (
        <Modal title="Ajouter un post" onClose={() => setOpenModal(false)}>
          <PostForm onSubmit={addPost} />
        </Modal>
      )}
      <div className="insta-flux-container">
        {filteredData.map((item) => (
          <InstaCard item={item} />
        ))}
      </div>
    </div>
  );
}
