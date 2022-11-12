import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
`

export const BtnCarrito = styled.button`
  width: 30%;
  font-size: 16px;
  background-color: lightgray;
  border: thin solid black;
  cursor: pointer;
  &:hover{
    background-color: #b0b0b0;
  }
`

export const CardItem = styled.div`
  outline: solid 1px black;
  box-shadow: 1px 1px 1px 0.5 black;
  width: 300px;
  height: 100%;
`;

export const CardInfo = styled.div`
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PCarrito = styled.p`
  visibility: ${({enCarrito}) => enCarrito ? "visible" : "hidden"};
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  width: 100%;
  background-color: green;
  border: none;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  text-align: center;
  background-color: ${({color}) => color ? color : "green"};
`;

export const SpanButton = styled.span`
  color: black;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
