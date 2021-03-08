import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todo";
import Form from "./Form";

function Item({ item }) {
  const { deleteItem, updateItem } = useContext(TodoContext);
  const [updating, setUpdating] = useState(false);
  return (
    <li>
      {!updating && <span onClick={() => setUpdating(true)}>{item.name}</span>}
      {updating && (
        <Form
          defaultValue={item.name}
          onSubmit={(itemName) => {
            updateItem(item, itemName);
            setUpdating(false);
          }}
        />
      )}
      {deleteItem && <button onClick={() => deleteItem(item)}>delete</button>}
    </li>
  );
}

export default Item;
