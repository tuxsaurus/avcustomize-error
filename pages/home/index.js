// @home/index.js
import Image from "next/image";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Link from "next/link";

import css from "./home.module.scss";

function MediaCard() {
  //const classes = useStyles();

  return (
    <Link href="/shop/item/tshirt">
      <Card className={css.root}>
        <CardActionArea>
          <CardMedia
            className={css.media}
            image="/shop/item/roupas/tshirt/manga_curta/img/shadow.png"
            title="Contemplative Reptile"
          />
          <Image
            src="/shop/item/roupas/tshirt/manga_curta/img/shadow.png"
            alt="me"
            width="256"
            height="256"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              R$ 20,00
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Camisa modelo tshirt masculina
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              em malha 100% algodão.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
}

export default function Home({ children }) {
  return (
    <>
      <h1>Home</h1>
      <MediaCard />
    </>
  );
}
