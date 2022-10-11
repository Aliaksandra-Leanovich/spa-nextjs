import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { IButton } from "./Button";

export const theme = {
  primary: Colors.YELLOW,
  secondary: Colors.BLUE,
  black: Colors.BLACK,
};

const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      color: ${theme.secondary};
      background: ${theme.primary};
      border: none;
      padding: 18px 40px;
      margin-right: 26px;
      border-radius: 8px;
    `,
    secondary: css`
      color: ${theme.black};
      background: ${theme.primary};
      border: none;
      border-radius: 8px;
      padding: 18px;
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}
  ${typography.button}
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    transform: translateY(-2px);
  }
`;
