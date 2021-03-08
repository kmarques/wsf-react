import React, { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../context/todo";

export default function ItemView() {
  const { id } = useParams();
  const { getItem } = useContext(TodoContext);
  const item = getItem(parseInt(id));
  return item !== undefined ? (
    <div>
      ID: {item.id}
      Name: {item.name}
    </div>
  ) : (
    <div>Item not exist</div>
  );
}
