// @shop/item/tshirt
import React from "react";

import Image from "next/image";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Layout from "@/component/layout";

import css from "./tshirt.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MediaCard() {
  //const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");
  const [tecido, setTecido] = React.useState("");
  const [descriptionTab, setDescriptionTab] = React.useState("");

  const handleChangeDescriptionTab = (e) => {
    console.log(e);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeTecido = (event) => {
    setTecido(event.target.value);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Layout>
        <h3>Em vez de ir pra [...id]/index.js</h3>
        <h3>Veio para tshirt/index.js</h3>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <Paper className={css.paper}>
              <Card className={css.root}>
                <CardActionArea>
                  <Image
                    className={css.img}
                    src="/shop/item/roupas/tshirt/manga_curta/img/shadow.png"
                    alt="me"
                    layout="responsive"
                    placeholder="blur"
                    width="512"
                    height="512"
                  />
                </CardActionArea>
              </Card>

              <AppBar position="static" color="default">
                <Tabs
                  value={descriptionTab}
                  onChange={handleChangeDescriptionTab}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Descrição" />
                  <Tab label="Tabela de tamanhos" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel
                  value={descriptionTab}
                  index={0}
                  dir={theme.direction}
                >
                  Item One
                </TabPanel>
                <TabPanel
                  value={descriptionTab}
                  index={1}
                  dir={theme.direction}
                >
                  Item Two
                </TabPanel>
                <TabPanel
                  value={descriptionTab}
                  index={2}
                  dir={theme.direction}
                >
                  Item Three
                </TabPanel>
              </SwipeableViews>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={css.paper}>
              xs=6
              <h3>Camisa Tshirt</h3>
              <p></p>
              <InputLabel id="demo-simple-select-label">Manga</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Manga Curta</MenuItem>
                <MenuItem value={20}>Manga Comprida</MenuItem>
              </Select>
              <InputLabel id="demo-simple-select-label-b">Tecido</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tecido}
                onChange={handleChangeTecido}
              >
                <MenuItem value={10}>100% Algodão Penteado</MenuItem>
                <MenuItem value={20}>100% Algodão Cardado</MenuItem>
              </Select>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
