import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";
import managbackground from "/public/managmentbackground.svg";

export const ContainerBlock = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 140px 220px;
  background-color: ${Colors.BLUE};
  background-image: url(${managbackground.src});
  left: 0;
  bottom: 0;
  background-repeat: no-repeat;

  ${media.LAPTOP2} {
    padding: 140px 32px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.LAPTOP2} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const BlockTitle = styled.h2`
  ${typography.H2}
  color: ${Colors.WHITE};
  margin-bottom: 24px;
`;

export const BlockDescription = styled.p`
  ${typography.subtitle}
  color: ${Colors.WHITE};
  margin-bottom: 60px;
`;
