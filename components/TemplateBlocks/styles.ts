import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  background-color: ${Colors.BLUE};
`;

export const ContainerBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  padding: 140px 0;
  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 100px;
    padding: 80px 0;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  ${media.TABLET} {
    align-items: center;
    text-align: center;
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
export const BlockTitleBlack = styled.h2`
  ${typography.H2}
  color: ${Colors.BLACK};
  margin-bottom: 24px;
`;

export const BlockDescriptionBlack = styled.p`
  ${typography.subtitle}
  color: ${Colors.BLACK};
  margin-bottom: 60px;
`;

export const BlockButton = styled.button`
  background-color: ${Colors.LIGHTBLUE};
  color: ${Colors.WHITE};
  ${typography.button}
  border-radius: 8px;
  max-width: 219px;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBlue = styled.div`
  width: 100%;
  height: 549px;
  background-color: ${Colors.LIGHTBLUE};
  ${media.LAPTOP} {
    height: 456px;
  }
  ${media.TABLET} {
    height: 367px;
  }
  ${media.PHONE} {
    height: 191px;
  }
`;

export const ManagementContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  background-color: ${Colors.WHITE};
`;