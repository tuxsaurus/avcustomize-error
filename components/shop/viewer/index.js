// @component/shop/viewer
//
import Image from "next/image";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//
import css from "./viewer.module.css";

export default function Viewer(props) {
  return (
    <>
      <Grid container spacing={1} className={css.viewer}>
        <Grid item xs={12} sm={8}>
          <Paper className={css.description}>
            <div className={css.productImg}>
              <Image
                src={props.img}
                alt="produc viewer"
                layout="responsive"
                placeholder="blur"
                width={512}
                height={512}
              />
            </div>
            <hr></hr>
            <h1>Descrição</h1>
            <p>Alguma coisa aqui descrevendo a porra do produto.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={css.options}>
            <h1>Product Options</h1>
            <p>{props.type}</p>
            <p>{props.model}</p>
            <p>{props.sizes[2]}</p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
