import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flex: {
    flexGrow: 1,
  },
  imgResponsive: {
    height: 64,
  },
  buttonPink: {
    color: "orange",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.flex}>
          <Button color="inherit" component={Link} to="/">
            <img src={logo} className={classes.imgResponsive} alt="logo" />
            <Typography variant="h6">Todo List Manager</Typography>
          </Button>
        </div>
        <Button
          color="inherit"
          component={Link}
          to="/list"
          className={classes.buttonPink}
        >
          Todo List
        </Button>
      </Toolbar>
    </AppBar>
  );
}

/*
<nav>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">Todo List</Link>
        </li>
      </ul>
    </nav>
    */
