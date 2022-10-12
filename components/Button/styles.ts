import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { IButton } from "./Button";

export const theme = {
  primary: Colors.YELLOW,
  secondary: Colors.BLUE,
  black: Colors.BLACK,
};

const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      background: ${theme.primary};
      border: none;
      padding: 18px 40px;
      margin: 0 25px 0 50px;
      border-radius: 8px;
    `,
    secondary: css`
      background: ${theme.primary};
      border: none;
      border-radius: 8px;
      padding: 18px;
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
  }
`;
