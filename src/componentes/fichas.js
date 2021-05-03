import React from "react";
import FichaJugador from "./fichaJugador";


function Fichas(props) {
    
//   let top01 = (props.tamPizarra[1] - 100), left01 = ((props.tamPizarra[0] / 2) - 50)
//   let style = getComputedStyle(props.divPizarra.current);
//   let marginLeft = parseInt(style.width);
//    console.log(marginLeft);
 

  return (
    <>
      <FichaJugador numero={1} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={2} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={3} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={4} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={5} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={6} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={7} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={8} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={9} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={10} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
      <FichaJugador numero={11} posicion={1} tamPizarra={props.tamPizarra}></FichaJugador>
    </>
  );
}

export default Fichas
