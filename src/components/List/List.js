import { DataGrid } from "@material-ui/data-grid";
import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router";
import { TodoContext } from "../../context/todo";
import ItemView from "../../views/ItemView";
import Form from "./Form";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "marque", headerName: "Marque", width: 200 },
  { field: "model", headerName: "Model", width: 200 },
  {
    field: "fullName",
    valueGetter: (params) => {
      return params.getValue("marque") + " - " + params.getValue("model");
    },
    headerName: "Full name",
    width: 300,
  },
  { field: "dateFabrication", headerName: "Fabrication Date", width: 200 },
];

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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
      <Form onSubmit={addItem} />

      <Route path="/list/:id">
        <ItemView />
      </Route>
    </>
  );
}

export default List;
