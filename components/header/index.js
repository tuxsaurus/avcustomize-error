import React from "react";
import ReactDOM from "react-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";

//import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import BrushIcon from "@material-ui/icons/Brush";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";

import Link from "next/link";

import css from "./header.module.css";

const routes = [
  ["/", "", <HomeIcon />],
  ["/shop", "", <ShoppingCartIcon />],
];

export default class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar className={css.toolbar}>
            <div>
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
            </div>
            <div></div>
            <div>
              <Link href="/blog/[id]" as="/blog/isso é muito foda">
                <a className="icon-header">
                  <IconButton
                    color="inherit"
                    aria-label="upload picture"
                    component="span"
                  >
                    <BrushIcon />
                  </IconButton>
                </a>
              </Link>

              <Link href="/shop/cart">
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
              <Link href="/auth">
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
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
