import React from "react";
import FichaJugador from "./fichaJugador";


function Fichas(props) {
    
  console.log(props.tamPizarra);
//   let style = getComputedStyle(props.divPizarra.current);
//   let marginLeft = parseInt(style.width);
//    console.log(marginLeft);
 

  return (
    <>
      <FichaJugador numero={1} posicion={1}></FichaJugador>
      <FichaJugador numero={2}></FichaJugador>
      <FichaJugador numero={3}></FichaJugador>
      <FichaJugador numero={4}></FichaJugador>
      <FichaJugador numero={5}></FichaJugador>
      <FichaJugador numero={6}></FichaJugador>
      <FichaJugador numero={7}></FichaJugador>
      <FichaJugador numero={8}></FichaJugador>
      <FichaJugador numero={9}></FichaJugador>
      <FichaJugador numero={10}></FichaJugador>
      <FichaJugador numero={11}></FichaJugador>
    </>
  );
}

export default Fichas
