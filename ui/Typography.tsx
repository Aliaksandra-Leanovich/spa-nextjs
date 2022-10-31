import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { VariantsTypography } from "../enums/TypographyVariants";

import { media } from "./media";

interface ITypography {
  color?: string;
  variant: string;
}

interface IObjectKeys {
  [key: string]: string;
}

export const test: IObjectKeys = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  paragraphSmall: "p",
  paragraphXS: "p",
  paragraphSmallBold: "p",
  paragraphMedium: "p",
  paragraphMediumBold: "p",
  subtitle: "p",
};

export interface IProps {
  variant: string;
  color: string;
  children: string;
}

const variantTypography = (variant = test.subtitle) =>
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
      font-weight: 400;
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

export const TypographyRoot = styled("p")<ITypography>`
  ${({ variant }) => variantTypography(variant)}
  color: ${({ color }) => color};
`;

export const Typography = ({ variant, color, children }: IProps) => {
  const Component: any = variant ? test[variant] : "p";

  return (
    <TypographyRoot as={Component} color={color} variant={variant}>
      {children}
    </TypographyRoot>
  );
};

export default Typography;
