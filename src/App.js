import {
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  RadioGroup,
} from "@material-ui/core";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Field from "./componentes/field";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing="2">
            <Grid key="0" item></Grid>
            <Grid key="1" item>
              <Field></Field>
            </Grid>
            <Grid key="2" item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
