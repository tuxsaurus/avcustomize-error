// @shop/item/tshirt/babylook
import { useState } from "react";

import Image from "next/image";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Layout from "@/components/layout";
import Viewer from "@/components/shop/viewer";

//import css from "./babylook.module.scss";

export default function Babylook() {
  const wtf = {
    type: "tshirt",
    model: "feminina",
    alias: "babylook",
    img: "/shop/item/roupas/tshirt/babylook/img/shadow.png",
    sizes: ["P", "M", "G"],
    product: "babylooks",
    xereca: "bucetas",
    cuzinho: "cus",
  };

  return (
    <>
      <Layout>
        <Viewer {...wtf} />
      </Layout>
    </>
  );
}
