import React from "react";
import Card from "./Card";
import {
  CardsContainer,
  Title,
  BtnCarrito,
  TitleContainer,
} from "./CardsStyledComponents";

const ListOfCards = ({
  productos,
  addProducto,
  carrito,
  removeProducto,
  componente,
  setComponente,
}) => {
  const enCarrito = (id) => carrito.some((el) => el.id === id);
  const productoEnCarrito = (id) => carrito.find((el) => el.id === id);
  const total = () =>
    productos.length === 0
      ? 0
      : carrito.reduce((a, c) => a + +c.price.slice(5) * c.cantidad, 0);
  const cardProps = {
    addProducto,
    removeProducto,
  };

  return (
    <>
      <TitleContainer>
        <Title>{componente === "tienda" ? "Tienda" : "Carrito"} </Title>
        {componente === "carrito" && <Title>Total: USD ${total()} </Title>}
        {componente === "tienda" ? (
          carrito.length !== 0 && (
            <BtnCarrito onClick={() => setComponente("carrito")}>
              Ir al carrito
            </BtnCarrito>
          )
        ) : (
          <BtnCarrito onClick={() => setComponente("tienda")}>
            {carrito.length !== 0 ? "Seguir comprando" : "Ir a la tienda"}
          </BtnCarrito>
        )}
      </TitleContainer>
      <CardsContainer>
        {productos.map((producto) => (
          <Card
            key={producto.id}
            producto={
              enCarrito(producto.id) ? productoEnCarrito(producto.id) : producto
            }
            {...cardProps}
          />
        ))}
        {productos.length === 0 && <p>Sin productos</p>}
      </CardsContainer>
    </>
  );
};

export default ListOfCards;
