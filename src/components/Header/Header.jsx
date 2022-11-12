import React from "react";
import {
  HeaderContainer,
  HeaderImg,
  HeaderItemContainer,
  SpanHeader,
} from "./HeaderStyledComponents";
import { TiShoppingCart } from "react-icons/ti";

const Header = ({ logo, name, carrito, setComponente }) => {
  const totalProductos = carrito.reduce((a, c) => a + c.cantidad, 0);
  return (
    <HeaderContainer>
      <HeaderItemContainer onClick={() => setComponente("tienda")}>
        <HeaderImg src={logo} alt="logo" />
        <h1>{name}</h1>
      </HeaderItemContainer>
      <HeaderItemContainer onClick={() => setComponente("carrito")}>
        <TiShoppingCart style={{ fontSize: "2.5rem" }} />
        <SpanHeader>{totalProductos}</SpanHeader>
      </HeaderItemContainer>
    </HeaderContainer>
  );
};

export default Header;
