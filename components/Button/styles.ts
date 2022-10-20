import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { IButton, ButtonVariants } from "./Button";

export const theme = {
  primary: Colors.YELLOW,
  secondary: Colors.BLUE,
  black: Colors.BLACK,
};

const variantStyles = (variant = ButtonVariants.primary) =>
  ({
    primary: css`
      padding: 18px 40px;
      margin: 0 25px 0 50px;
    `,
    secondary: css`
      padding: 18px;
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  ${media.PHONE} {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
  background: ${theme.primary};
  border: none;
  border-radius: 8px;
  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
  }
`;
