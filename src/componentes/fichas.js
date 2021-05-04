import React from "react";
import FichaJugador from "./fichaJugador";

function Fichas(props) {
  if (props.tamPizarra.length === 2) {
    console.log(props.tamPizarra, props.tamPizarra.length);
    let elements = [];
    let i;
    let x = 1,
      y = 1;
    for (i = 1; i < 12; i++) {
      if (i === 1) {
        x = props.tamPizarra[0] / 2 - 50;
        y = props.tamPizarra[1] - 100;
      } else if (i === 2) {
        x = props.tamPizarra[0] * 0.28;
        y = props.tamPizarra[1] * 0.77;
      } else if (i === 3) {
        x = props.tamPizarra[0] * 0.055;
        y = props.tamPizarra[1] * 0.75;
      } else if (i === 4) {
        x = props.tamPizarra[0] * 0.76;
        y = props.tamPizarra[1] * 0.75;
      } else if (i === 5) {
        x = props.tamPizarra[0] / 2 - 50;
        y = props.tamPizarra[1] * 0.6;
      } else if (i === 6) {
        x = props.tamPizarra[0] * 0.55;
        y = props.tamPizarra[1] * 0.77;
      } else if (i === 7) {
        x = props.tamPizarra[0] * 0.76;
        y = props.tamPizarra[1] * 0.5 - 50;
      } else if (i === 8) {
        x = props.tamPizarra[0] * 0.055;
        y = props.tamPizarra[1] * 0.5 - 50;
      } else if (i === 9) {
        x = props.tamPizarra[0] * 0.28;
        y = props.tamPizarra[1] * 0.04;
      } else if (i === 10) {
        x = props.tamPizarra[0] / 2 - 50;
        y = props.tamPizarra[1] * 0.25;
      } else if (i === 11) {
        x = props.tamPizarra[0] * 0.55;
        y = props.tamPizarra[1] * 0.04;
      }

      elements.push(
        <FichaJugador
          key={`ficha${i}`}
          numero={i}
          posicion={i}
          x={x}
          y={y}
        ></FichaJugador>
      );
    }
    return <>{elements}</>;
  }
  return <></>;
}

export default Fichas;
