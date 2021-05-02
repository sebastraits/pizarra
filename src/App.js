import { makeStyles } from "@material-ui/core";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Fichas from "./componentes/fichas";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    Height: "600px",
  },
  media: {
    height: 140,
  },
});

function App() {
  const [tamPizarra, setTamPizarra] = useState([])
  const classes = useStyles();
  const inputRef = useRef();

  useEffect(() => {
  let style = getComputedStyle(inputRef.current);
  setTamPizarra([parseInt(style.width), parseInt(style.height)])
  },[inputRef])

  return (
    <div className="App">
      <header className="App-header">
        <div ref={inputRef} id="terrenoJuego" className="contenedorTerreno">
          <img className="terrenoJuego" src="img/pizarra.jpg" alt="terreno" />
          <Fichas tamPizarra={tamPizarra}></Fichas>
       
        </div>
      </header>
    </div>
  );
}

export default App;
