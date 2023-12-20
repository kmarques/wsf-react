import { useState } from "react";
import InstaCard from "./InstaCard";
import data from "./data.json";

export default function InstaFlux() {
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data
    .filter(
      (item) =>
        item.user.startsWith(searchValue) ||
        item.tags.some((tag) => tag.startsWith(searchValue)) ||
        item.views.toString().startsWith(searchValue)
    )
    .sort((a, b) => b.views - a.views);

  return (
    <div className="insta-flux">
      <h1>Mon flux</h1>
      <input
        className="insta-flux-search"
        placeholder="Search"
        value={searchValue}
        onInput={(event) => setSearchValue(event.target.value)}
      />
      <div className="insta-flux-container">
        {filteredData.map((item) => (
          <InstaCard item={item} />
        ))}
      </div>
    </div>
  );
}
