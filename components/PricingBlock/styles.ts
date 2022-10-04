import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const PricingContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px 140px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BlockTitle = styled.h2`
  ${typography.H2}
  color: ${Colors.BLACK};
  margin-bottom: 24px;
`;

export const BlockDescription = styled.p`
  ${typography.subtitle}
  color: ${Colors.BLACK};
  margin-bottom: 60px;
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
  max-width: 470px;
  width: 100%;
  ${media.LAPTOP} {
    max-width: 424px;
  }
  ${media.TABLET} {
    max-width: 341px;
  }
  ${media.PHONE} {
    max-width: 289px;
    padding: 20px;
  }
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
    background-color: ${Colors.BLUE};
    color: ${Colors.YELLOW};
    padding: 80px 44px;
    ${media.PHONE} {
      padding: 20px;
    }
  }
`;

export const TabSet = styled.p`
  ${typography.paragraph1}
  margin-bottom: 25px;
`;
export const TabPrice = styled.h4`
  ${typography.H3}
  margin-bottom: 25px;
`;

export const TabDescr = styled.p`
  ${typography.paragraph2}
  margin-bottom: 25px;
`;

export const TabAdvantage = styled.div`
  ${typography.paragraph3}
  margin-bottom: 28px;
`;
export const TabButton = styled.button`
  ${typography.button}
  border: 1px solid ${Colors.YELLOW};
  border-radius: 8px;
  padding: 16px 40px;
`;