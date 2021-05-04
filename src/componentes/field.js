import React, { useState, useEffect, useRef } from "react";
import Fichas from "./fichas"

function Field(props) {
    const inputRef = useRef(null);
    const [tamPizarra, setTamPizarra] = useState([]);

    function actualizar() {
        let style = getComputedStyle(inputRef.current);
        setTamPizarra([parseInt(style.width), parseInt(style.height)]);
       

  return (
    <div
      ref={inputRef}
      id="terrenoJuego"
      className="contenedorTerreno"
      onLoad={actualizar}
    >
      <img className="terrenoJuego" src="img/pizarra.jpg" alt="terreno" />
      <Fichas tamPizarra={tamPizarra}></Fichas>
      
    </div>
  );
}

export default Field;
