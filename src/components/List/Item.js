import React from "react";

function Item({ item, deleteItem }) {
  return (
    <li>
      {item.name}
      {deleteItem && <button onClick={() => deleteItem(item)}>delete</button>}
    </li>
  );
}

export default Item;
