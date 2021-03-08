import React, { useEffect, useState } from "react";

export const TodoContext = React.createContext();

const TodoProvider = function ({ children }) {
  const [items, setItems] = useState([{ id: Date.now(), name: "bar" }]);

  useEffect(() => {
    fetch("http://localhost:3009/vehicules")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = (itemName) => {
    const [marque, model] = itemName.split(" - ");
    fetch("http://localhost:3009/vehicules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        marque,
        model,
      }),
    })
      .then((response) => response.json())
      .then((vehicule) => setItems([...items, vehicule]));
  };

  const updateItem = (item, itemName) => {
    const [marque, model] = itemName.split(" - ");
    fetch(`http://localhost:3009/vehicules/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        marque,
        model,
      }),
    })
      .then((response) => response.json())
      .then((vehicule) =>
        setItems(
          items.map((_item) => {
            if (_item.id === vehicule.id) return vehicule;
            return _item;
          })
        )
      );
  };

  const deleteItem = (item) => {
    fetch(`http://localhost:3009/vehicules/${item.id}`, {
      method: "DELETE",
    }).then(() => {
      setItems(items.filter((currentItem) => item.id !== currentItem.id));
    });
  };

  const getItem = (id) => {
    console.log(id, items);
    return items.find((item) => item.id === id);
  };

  return (
    <TodoContext.Provider
      value={{ items, addItem, deleteItem, updateItem, getItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
