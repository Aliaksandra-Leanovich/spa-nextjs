import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { Colors, media, Typography } from "../../ui";

export const ContainerMobileSC = styled.div`
  display: none;

  ${media.TABLET} {
    width: 100%;
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
  margin-right: 20px;
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

export const TextContainerSC = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const SwiperCustomSC = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
`;
