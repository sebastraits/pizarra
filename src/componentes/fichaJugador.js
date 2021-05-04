import React, { useEffect, useRef, useState } from "react";

function FichaJugador(props) {
  let fotoJugador = `img/${props.numero}.png`;
  let idJugador = `ficha${props.numero}`;

  let [dragX, setDragX] = useState(0);
  let [dragY, setDragY] = useState(0);

  const inputRef = useRef(null);
  let [ficha01x, setFicha01x] = useState(props.x);
  let [ficha01y, setFicha01y] = useState(props.y);

  useEffect(() => {
    inputRef.current.style.left = `${ficha01x}px`;
    inputRef.current.style.top = `${ficha01y}px`;
  }, [ficha01x, ficha01y]);

  function dragEnter(event) {
    setDragX(event.clientX);
    setDragY(event.clientY);
  }

  function dragLeave(event) {
    let movimientoX = event.clientX - dragX;
    let movimientoY = event.clientY - dragY;
    setFicha01x(ficha01x + movimientoX);
    setFicha01y(ficha01y + movimientoY);
  }

  return (
    <img
      ref={inputRef}
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
