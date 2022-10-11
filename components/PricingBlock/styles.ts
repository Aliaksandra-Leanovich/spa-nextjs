import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const PricingContainer = styled.section`
  margin: 0 auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 220px 140px;
  ${media.LAPTOP2} {
    padding: 0 32px 140px 32px;
  }
`;

export const BlockTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const Tab = styled.div`
  border: 1px solid ${Colors.YELLOW};
  border-radius: 10px;
  padding: 40px 44px;
  height: max-content;

  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scaleY(1.2);
    background-color: ${Colors.BLUE};

    ${media.PHONE} {
      padding: 20px;
    }
  }

  &:hover #point path {
    fill: yellow;
  }
  &:hover #text {
    color: ${Colors.WHITE};
  }
  &:hover #price {
    color: ${Colors.YELLOW};
  }
  &:hover #button {
    color: ${Colors.WHITE};
    background-color: ${Colors.LIGHTBLUE};
    border: none;
  }
`;
export const Point = styled.img`
  height: 18px;
  margin-right: 19px;

  &:hover path {
    fill: ${Colors.YELLOW};
  }
`;

export const TabButton = styled.button`
  ${typography.button}
  border: 1px solid ${Colors.YELLOW};
  border-radius: 8px;
  padding: 16px 40px;
`;
