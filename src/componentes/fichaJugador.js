import React, { useEffect, useState } from "react";

function FichaJugador(props) {
  let fotoJugador = `img/${props.numero}.png`;
  let idJugador = `ficha${props.numero}`;


  let [dragX, setDragX] = useState(0);
  let [dragY, setDragY] = useState(0);
  let [ficha01x, setFicha01x] = useState(1);
  let [ficha01y, setFicha01y] = useState(1);


// if (props.posicion === 1) {
//       setFicha01x(ancho / 2 - 50);
//       setFicha01y(alto - 100);
//       // let element = document.getElementById(idJugador);
//       // element.style.left = `${(ancho / 2) - 50}px`;
//       // element.style.top = `10px`;
//     }

  useEffect(() => {
//   let cancha = document.getElementById("terrenoJuego");
//   let style = getComputedStyle(cancha);
//   let marginLeft = parseInt(style.width)
//   let ancho = cancha.Width;
//   let alto = cancha.offsetHeight;
//   console.log(cancha, style.width)
    
  }, []);

  function dragEnter(event) {
    setDragX(event.clientX);
    setDragY(event.clientY);
  }

  function dragLeave(event) {
    let movimientoX = event.clientX - dragX;
    let movimientoY = event.clientY - dragY;
    setFicha01x(ficha01x + movimientoX);
    setFicha01y(ficha01y + movimientoY);
    // console.log(ficha01x + movimiento);
    // document.getElementById(event.target.id).style.left = `${ficha01x}px`;
    // console.log(document.getElementById(event.target.id).style.left)
  }

  useEffect(() => {
    let element = document.getElementById(`ficha${props.numero}`);
    element.style.left = `${ficha01x}px`;
    element.style.top = `${ficha01y}px`;
  }, [ficha01x, ficha01y]);

  return (
    <img
      id={idJugador}
      className="fichaJugador"
      src={fotoJugador}
      alt={idJugador}
      onDragEnter={dragEnter}
      onDragEnd={dragLeave}
    />
  );
}

export default FichaJugador;
