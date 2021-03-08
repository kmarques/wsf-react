import React from "react";
import TodoProvider from "../context/todo";
import List from "../components/List/List";

export default function ListView() {
  return (
    <TodoProvider>
      <List />
    </TodoProvider>
  );
}
