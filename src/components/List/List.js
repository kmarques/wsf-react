import React, { useEffect, useState } from "react";
import Button from "../../Button";
import Item from "./Item";

function List() {
  const [items, setItems] = useState([{ id: Date.now(), name: "bar" }]);
  const [itemName, setItemName] = useState("");
  const [className, setClassName] = useState("test");

  useEffect(() => {
    console.log("items changed");

    return () => {
      console.log("items will changed");
    };
  }, [items, itemName]);

  useEffect(() => {
    console.log("component mounted");
    setTimeout(() => setClassName(className + " test-anim-begin"), 2000);

    return () => {
      console.log("component will unmount");
    };
    // eslint-disable-next-line
  }, []);

  const addItem = () => {
    const newItems = [
      ...items,
      {
        id: Date.now(),
        name: itemName,
      },
    ];
    setItems(newItems);
    setItemName("");
  };

  const deleteItem = (item) => {
    const newITems = items.filter((currentItem) => item.id !== currentItem.id);
    setItems(newITems);
  };

  return (
    <>
      <ul className={className}>
        {items.map((item) => (
          <Item item={item} deleteItem={deleteItem} />
        ))}
      </ul>

      {items.length !== 0 && <Item item={items[0]} />}
      {items.length === 0 && "List Vide"}
      <input
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
      />
      <Button title="Add Item" onClick={addItem} />
    </>
  );
}

export default List;
