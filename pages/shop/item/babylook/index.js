// @shop/item/tshirt
import Image from "next/image";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Layout from "@/component/layout";

import css from "./tshirt.module.scss";

export default function MediaCard() {
  //const classes = useStyles();

  return (
    <>
      <Layout>
        <h1>Babylook</h1>
        <h3>Em vez de ir pra [...id]/index.js</h3>
        <h3>Veio para tshirt/index.js</h3>
        <Card className={css.root}>
          <CardActionArea>
            <CardMedia
              className={css.media}
              image="/shop/item/roupas/tshirt/manga_curta/img/shadow.png"
              title="Contemplative Reptile"
            />
            <Image
              src="/shop/item/roupas/tshirt/babylook/img/shadow.png"
              alt="me"
              layout="responsive"
              placeholder="blur"
              width="256"
              height="256"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tshirt
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Diversas opções de camisas tshirt.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              R$ 25,00
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Layout>
    </>
  );
}
