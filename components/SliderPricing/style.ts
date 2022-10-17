import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const ContainerMobileSC = styled.div`
  display: none;
  width: 100%;
  padding: 0 16px;
  ${media.TABLET} {
    display: flex;
  }
`;

export const TabSC = styled.div`
  background-color: ${Colors.BLUE};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 85px;
`;

export const PointSC = styled.img`
  height: 18px;
  margin-right: 19px;
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
`;

export const TabTextContainerSC = styled.div``;
