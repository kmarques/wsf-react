import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import HomeView from "../views/HomeView";
import ItemView from "../views/ItemView";
import ListView from "../views/ListView";

export default function Body() {
  return (
    <div style={{ flex: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center">
          MyBody
        </Typography>
        <Switch>
          <Route path="/list">
            <ListView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
