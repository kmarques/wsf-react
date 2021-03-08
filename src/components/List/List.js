import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todo";
import Form from "./Form";
import Item from "./Item";

function List() {
  const [className, setClassName] = useState("test");
  const { items, addItem } = useContext(TodoContext);
  useEffect(() => {
    console.log("items changed");

    return () => {
      console.log("items will changed");
    };
  }, [items]);

  useEffect(() => {
    console.log("component mounted");
    setTimeout(() => setClassName(className + " test-anim-begin"), 2000);

    return () => {
      console.log("component will unmount");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className={className}>
        {items.map((data) => (
          <Item item={data} />
        ))}
      </ul>

      {items.length !== 0 && <Item item={items[0]} />}
      {items.length === 0 && "List Vide"}
      <Form onSubmit={addItem} />
    </>
  );
}

export default List;
