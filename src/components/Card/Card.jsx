import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  CardInfo,
  Img,
  SpanButton,
  CardItem,
  PCarrito,
} from "./CardsStyledComponents";

const Card = ({ producto, addProducto, removeProducto }) => {
  const [url, setUrl] = useState(producto.demo_female);
  const toggleUrl = (url) => setUrl(url);

  return (
    <CardItem>
      <CardInfo>
        <span>
          <SpanButton onClick={() => toggleUrl(producto.demo_female)}>
            FOR HER
          </SpanButton>
          /
          <SpanButton onClick={() => toggleUrl(producto.demo_male)}>
            FOR HIM
          </SpanButton>
        </span>
        <Img src={url} />
        <p>{producto.name}</p>
        <p>{producto.price}</p>
        {producto.cantidad ? (
          <PCarrito enCarrito>En carrito: {producto.cantidad}</PCarrito>
        ) : (
          <PCarrito>No carrito</PCarrito>
        )}
      </CardInfo>
      <ButtonContainer>
        {producto.cantidad && <Button color="red" onClick={() => removeProducto(producto.id)}> REMOVE </Button>}
        <Button onClick={() => addProducto(producto)}>
          {producto.cantidad ? "ADD 1" : "ADD TO CART"}
        </Button>
      </ButtonContainer>
    </CardItem>
  );
};

export default Card;
