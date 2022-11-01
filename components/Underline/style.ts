import styled from "@emotion/styled";
import { media } from "../../ui/media";
import { TypographyRoot } from "../../ui/Typography";
import { IUnderlineProps } from "./types";

export const TitleContainerSC = styled.div`
  position: relative;
  width: fit-content;

  span {
    display: inline;
    ${media.LAPTOP} {
      display: block;
    }
  }
`;
export const UnderlineImageSC = styled.img<Pick<IUnderlineProps, "css">>`
  ${({ css }) => css}
  z-index: 0;
  position: absolute;
`;
export const TitleTextSC = styled(TypographyRoot)`
  z-index: 1;
  position: relative;
`;
