import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { media } from "./media";

interface IProps {
  color?: string;
  margin?: string;
  tabletMargin?: string;
  laptopMargin?: string;
  laptop2Margin?: string;
  phoneMargin?: string;
  weight?: string;
  hoverColor?: string;
}

export const H1 = styled.h1<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-family: "Inter";
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  ${media.PHONE} {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const H2 = styled.h2<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

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
`;

export const H3 = styled.p<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-family: "Inter";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

export const H5 = styled.h5<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
`;

export const ParagraphSmall = styled.p<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  font-weight: ${({ weight }) => weight};
`;
export const ParagraphMedium = styled.p<IProps>`
  font-family: "Inter";
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-weight: ${({ weight }) => weight};
`;

export const ParagraphXS = styled.p<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${media.TABLET} {
    margin: ${({ tabletMargin }) => tabletMargin};
  }
  &:hover {
    cursor: pointer;
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export const Subtitle = styled.p<IProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.02em;

  ${media.DESKTOP} {
    margin: ${({ laptop2Margin }) => laptop2Margin};
  }
  ${media.LAPTOP} {
    margin: ${({ laptopMargin }) => laptopMargin};
  }
  ${media.PHONE} {
    margin: ${({ phoneMargin }) => phoneMargin};
  }
  &:hover {
    cursor: pointer;
    color: ${({ hoverColor }) => hoverColor};
  }
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
