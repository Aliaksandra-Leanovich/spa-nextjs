import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { Swiper } from "swiper/react";
import { Typography } from "../../ui/typography";

export const ContainerMobileSC = styled.div`
  display: none;
  width: 100%;
  padding: 0 16px;
  ${media.TABLET} {
    display: block;
  }
`;
export const TextPriceSC = styled(Typography)`
  color: ${Colors.YELLOW};
`;

export const TabSC = styled.div`
  background-color: ${Colors.BLUE};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 86px;
  max-width: 472px;
`;

export const PointSC = styled.div`
  height: 18px;
  margin-right: 19px;
  svg {
    path {
      stroke: ${Colors.YELLOW};
    }
  }
`;

export const TabButtonSC = styled.button`
  color: ${Colors.WHITE};
  background-color: ${Colors.LIGHTBLUE};
  border: none;
  border-radius: 8px;
  padding: 16px 40px;
`;

export const TabAdvantagesSC = styled.div``;

export const TextContainerSC = styled.div`
  margin: 0 0 24px 0;
  display: flex;
`;

export const TabTextContainerSC = styled.div``;

export const SwiperCustomSC = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
