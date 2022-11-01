import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { VariantsTypography } from "../enums/TypographyVariants";
import { media } from "./media";

export interface IProps {
  variant: VariantsTypography;
  color?: string;
}
interface ITypography {
  color?: string;
  variant: VariantsTypography;
}
export const TypographyTypes = {
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
} as const;

const variantTypography = {
  h1: css`
    font-family: "Inter";
    font-weight: 700;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;
    ${media.TABLET} {
      font-size: 54px;
      line-height: 66px;
    }
    ${media.PHONE} {
      font-size: 36px;
      line-height: 44px;
    }
  `,
  h2: css`
    font-family: "Inter";
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
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
};

export const TypographyRoot = styled("p")<ITypography>`
  ${({ variant }) => variantTypography[variant]}
  color: ${({ color }) => color};
`;

export const Typography = ({
  variant,
  color,
  children,
}: React.PropsWithChildren<IProps>) => {
  const Component = variant
    ? TypographyTypes[variant]
    : ("p" as React.ElementType<any>);

  return (
    <TypographyRoot as={Component} color={color} variant={variant}>
      {children}
    </TypographyRoot>
  );
};

export default Typography;
