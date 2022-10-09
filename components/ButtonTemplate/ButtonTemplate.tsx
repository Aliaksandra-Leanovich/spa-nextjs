import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

interface IButton {
  background: string;
  color: string;
  type: "button" | "submit" | "reset";
  text: string;
}

export const ButtonTemplate = ({ text, type, color, background }: IButton) => {
  return (
    <StyledButton color={color} type={type} background={background}>
      {text}
    </StyledButton>
  );
};

interface IProps {
  color: string;
  background: string;
}

const StyledButton = styled.button<IProps>`
  background-color: ${({ color }) => (color ? "#FFE492" : "white")};
  color: ${({ color }) => (color ? "#043873" : "black")};

  ${typography.button}

  padding: 18px 40px;
  margin-right: 26px;

  border: none;
  border-radius: 8px;

  ${media.LAPTOP} {
    margin-right: 0px;
    margin-bottom: 2rem;
  }
  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    transform: translateY(-2px);
  }
`;
