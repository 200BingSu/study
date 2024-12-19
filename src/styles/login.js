import styled from "@emotion/styled";
import { useState } from "react";

// 스타일 정의
export const ButtonDiv = styled.div`
  width: 100px;
  height: 50px;
  color: ${({ buttonState }) => {
    switch (buttonState) {
      case "active":
        return "white";
      case "hover":
        return "white";
      case "disabled":
        return "black";
      default:
        return "gray";
    }
  }};
  background-color: ${({ buttonState }) => {
    switch (buttonState) {
      case "active":
        return "red";
      case "hover":
        return "blue";
      case "disabled":
        return "black";
      default:
        return "lightgray";
    }
  }};
`;
