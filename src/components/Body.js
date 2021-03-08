import React from "react";
import { Route, Switch } from "react-router";
import HomeView from "../views/HomeView";
import ItemView from "../views/ItemView";
import ListView from "../views/ListView";

export default function Body() {
  return (
    <div style={{ flex: 1 }}>
      MyBody
      <Switch>
        <Route path="/list">
          <ListView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}
