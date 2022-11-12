import React, { useState } from "react";
import ListOfCards from "./Card/ListOfCards";
import Header from "./Header/Header";
import data from "../data.json";

const Store = () => {
  const [carrito, setCarrito] = useState([]);
  const [componente, setComponente] = useState("tienda");

  const addProducto = (producto) => {
    // const enCarrito = carrito.some((el) => el.id === producto.id);
    if (producto.cantidad) {
      const newCarrito = carrito.map((el) =>
        el.id !== producto.id ? el : { ...el, cantidad: el.cantidad + 1 }
      );
      setCarrito(newCarrito);
    } else setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  };

  const removeProducto = (id) => {
    const cantidad = carrito.find((el) => el.id === id).cantidad;
    if (cantidad > 1) {
      const newCarrito = carrito.map((el) =>
        el.id !== id ? el : { ...el, cantidad: el.cantidad - 1 }
      );
      setCarrito(newCarrito);
    } else {
      setCarrito(carrito.filter((el) => el.id !== id));
    }
  };

  const headerProps = {
    carrito,
    ...data.store,
    setComponente,
  };

  const ListOfCardsProps = {
    productos: data.products,
    carrito,
    addProducto,
    removeProducto,
    componente,
    setComponente
  };

  return (
    <div>
      <Header {...headerProps} />
      {componente === "tienda" ? (
        <ListOfCards {...ListOfCardsProps} productos={data.products} />
      ) : (
        <ListOfCards {...ListOfCardsProps} productos={carrito} />
      )}
    </div>
  );
};

export default Store;
