import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { ILink, LinkVariants } from "./LinkTemplate";

const variantStyles = (variant = LinkVariants.linkSmall) =>
  ({
    linkSmall: css`
      padding: 20px;
    `,
    linkMedium: css`
      padding: 18px 24px;
    `,
    linkLarge: css`
      padding: 20px 40px;
    `,
  }[variant]);

export const LinkSC = styled.a<Pick<ILink, "variant">>`
  ${({ variant }) => variantStyles(variant)}
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
  ${typography.button}
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 10px;
`;
