import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { ILink, LinkVariants } from "./LinkTemplate";

const variantStyles = (variant = LinkVariants.linkSmall) =>
  ({
    linkSmall: css`
      padding: 20px;
      width: max-content;
      border: none;
      border-radius: 8px;
      background-color: ${Colors.LIGHTBLUE};
      color: ${Colors.WHITE};
      z-index: 1;
      cursor: pointer;
      transition: background-color 0.5s ease-out;
      &:hover {
        background-color: ${Colors.YELLOW};
      }
    `,
    linkMedium: css`
      padding: 18px 24px;
      width: max-content;
      border: none;
      border-radius: 8px;
      background-color: ${Colors.LIGHTBLUE};
      color: ${Colors.WHITE};
      z-index: 1;
      cursor: pointer;
      transition: background-color 0.5s ease-out;
      &:hover {
        background-color: ${Colors.YELLOW};
      }
    `,
    linkLarge: css`
      padding: 20px 40px;
      width: max-content;
      border: none;
      border-radius: 8px;
      background-color: ${Colors.LIGHTBLUE};
      color: ${Colors.WHITE};
      z-index: 1;
      cursor: pointer;
      transition: background-color 0.5s ease-out;
      &:hover {
        background-color: ${Colors.YELLOW};
      }
    `,
  }[variant]);

export const LinkSC = styled.a<Pick<ILink, "variant">>`
  ${({ variant }) => variantStyles(variant)}
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 10px;
  margin-left: 10px;
`;
