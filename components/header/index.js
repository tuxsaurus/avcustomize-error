import React from "react";
import ReactDOM from "react-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

import Link from "next/link";

const routes = [
  ["/", "", <HomeIcon />],
  ["/shop", "", <ShoppingCartIcon />],
];

export default class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Link href="/">
              <a className="icon-header">
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="span"
                >
                  <HomeIcon />
                </IconButton>
              </a>
            </Link>
            <Link href="/shop">
              <a className="icon-header">
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="span"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </a>
            </Link>
            <Link href="/blog/[id]" as="/blog/isso é muito foda">
              <a className="icon-header">
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="span"
                >
                  <PersonIcon />
                </IconButton>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
