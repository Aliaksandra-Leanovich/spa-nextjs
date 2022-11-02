import styled from "@emotion/styled";
import { media } from "../../ui/media";
import { IUnderlineProps } from "./types";

export const TitleContainerSC = styled.div`
  z-index: 1;
  position: relative;

  span {
    display: inline;
    ${media.LAPTOP} {
      display: block;
    }
  }
`;
export const UnderlinerImageSC = styled.img<Pick<IUnderlineProps, "css">>`
  ${({ css }) => css}
  z-index: 0;
  position: absolute;
`;

export const ContainerSC = styled.div`
  position: relative;
  width: fit-content;
  z-index: 1;
`;
