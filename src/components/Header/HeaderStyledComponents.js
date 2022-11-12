import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;
  padding: 10px;
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
`;

export const HeaderImg = styled.img`
  width: 3rem;
`;

export const SpanHeader = styled.span`
  background-color: white;
  padding: 0px 9px;
  border-radius: 5px;
  margin-right: 20px;
  align-self: center;
`;

export const IHeader = styled.i`
  font-size: 2.5rem;
`;


