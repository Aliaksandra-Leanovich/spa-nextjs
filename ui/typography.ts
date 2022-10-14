import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { media } from "./media";

export enum VariantsTypography {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h5 = "h5",
  paragraphSmall = "paragraphSmall",
  paragraphXS = "paragraphXS",
  paragraphSmallBold = "paragraphSmallBold",
  paragraphMedium = "paragraphMedium",
  paragraphMediumBold = "paragraphMediumBold",
  subtitle = "subtitle",
}

interface ITypography {
  color?: string;
  variant: VariantsTypography;
}

const variantTypography = (variant = VariantsTypography.subtitle) =>
  ({
    h1: css`
      font-family: "Inter";
      font-weight: 700;
      font-size: 56px;
      line-height: 64px;
      ${media.PHONE} {
        font-size: 32px;
        line-height: 44px;
      }
    `,
    h2: css`
      font-family: "Inter";
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
      letter-spacing: -0.02em;

      ${media.TABLET} {
        font-size: 54px;
        line-height: 65px;
      }
      ${media.PHONE} {
        font-size: 36px;
        line-height: 44px;
      }
    `,
    h3: css`
      font-family: "Inter";
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    `,
    h5: css`
      font-family: "Inter";
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
    `,
    paragraphSmall: css`
      font-family: "Inter";
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
    `,
    paragraphXS: css`
      font-family: "Inter";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    `,
    paragraphSmallBold: css`
      font-family: "Inter";
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
    `,
    paragraphMedium: css`
      font-family: "Inter";
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    `,
    paragraphMediumBold: css`
      font-family: "Inter";
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    `,
    subtitle: css`
      font-family: "Inter";
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
    `,
  }[variant]);

export const TypographySC = styled.p<ITypography>`
  ${({ variant }) => variantTypography(variant)}
  color: ${({ color }) => color};
`;

export const button = css`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  ${media.PHONE} {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
`;
export const ButtonTextSC = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  ${media.PHONE} {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
`;
export const typography = {
  button,
};
