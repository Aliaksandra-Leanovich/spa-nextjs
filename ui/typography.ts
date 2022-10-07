import { css } from "@emotion/react";
import { media } from "./media";

const H1 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  ${media.PHONE} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: -0.02em;
  ${media.PHONE} {
    font-size: 36px;
    line-height: 44px;
  }
`;

const H3 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;
const H5 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
`;

const subtitle = css`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.02em;
`;

const bodytext = css`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
`;
const paragraph1 = css`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;
const paragraph2 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;
const paragraph3 = css`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const button = css`
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
  H1,
  H2,
  H3,
  H5,
  subtitle,
  bodytext,
  paragraph1,
  paragraph2,
  paragraph3,
  button,
};
