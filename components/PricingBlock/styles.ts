import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const PricingContainerSC = styled.section`
  overflow-y: scroll;
  scroll-behavior: smooth;

  margin: 0 auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 220px 140px;
  ${media.DESKTOP} {
    padding: 0 32px 140px 32px;
  }
  ${media.TABLET} {
    display: block;

    padding: 60px 16px;
  }
`;

export const BlockTabsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  ${media.TABLET} {
    display: none;
  }
`;
export const TextContainerTitleSC = styled.div`
  text-align: center;
`;
export const ContainerSliderSC = styled.div`
  display: none;

  ${media.TABLET} {
    display: flex;
  }
`;
export const Border = styled.div`
  position: absolute;
  //////////////!!!!!!!!
  transition: all 0.5s ease-out;
  border: 1px solid ${Colors.YELLOW};
  border-radius: 10px;
  z-index: -1;
  inset: 0;
`;

export const PointSC = styled.img`
  height: 18px;
  margin-right: 20px;

  &:hover path {
    fill: ${Colors.YELLOW};
  }
`;

export const TabButtonSC = styled.button`
  border: 1px solid ${Colors.YELLOW};
  border-radius: 8px;
  padding: 16px 40px;
`;

export const TabAdvantagesSC = styled.div``;

export const TextContainerSC = styled.div`
  margin: 0 0 24px 0;
`;

export const TabTextContainerSC = styled.div`
  padding: 40px 44px;
`;

export const TabSC = styled.div`
  position: relative;
  height: max-content;
  z-index: 1;

  &:hover {
    ${Border} {
      transform: scaleY(1.2);
      background-color: ${Colors.BLUE};
      ${media.PHONE} {
        padding: 20px;
      }
    }
    &:hover p {
      color: ${Colors.WHITE};
    }

    &:hover ${TabButtonSC} {
      color: ${Colors.WHITE};
      background-color: ${Colors.LIGHTBLUE};
      border: none;
    }
  }
`;
export const TextContainerDescriptionSC = styled.div`
  text-align: center;
  margin: 24px 0 124px;
  ${media.DESKTOP} {
    margin: 24px 0 114px;
  }
  ${media.LAPTOP} {
    margin: 24px 0 136px;
  }
  ${media.TABLET} {
    margin: 24px 0 86px;
  }
`;
