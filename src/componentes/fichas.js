import React from "react";
import FichaJugador from "./fichaJugador";

function Fichas(props) {
  //   let top01 = (props.tamPizarra[1] - 100), left01 = ((props.tamPizarra[0] / 2) - 50)
  //   let style = getComputedStyle(props.divPizarra.current);
  //   let marginLeft = parseInt(style.width);
  //  console.log(props.tamPizarra);

  let elements = [];
  let i;
  for (i = 1; i < 12; i++) {
    elements.push(
      <FichaJugador
        numero={i}
        posicion={i}
        tamPizarra={props.tamPizarra}
      ></FichaJugador>
    );
  }
  return <>{elements}</>;
}

export default Fichas;
