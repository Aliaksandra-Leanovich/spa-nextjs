import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";
import background from "/public/mainbackground.svg";
import managbackground from "/public/managmentbackground.svg";

export const MainContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  background-color: ${Colors.BLUE};
`;
export const MainBlockContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 131px 32px 0;
  background-color: ${Colors.BLUE};
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  padding: 50px 0;
  justify-content: center;
  align-items: center;

  ${media.TABLET} {
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 100px;
    padding: 80px 0 30px;
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

export const ManagementContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 50px 32px;
  background-color: ${Colors.WHITE};
  background-image: url(${managbackground.src});
  left: 0;
  bottom: 0;
  background-repeat: no-repeat;
`;

export const ImageContainer = styled.img`
  width: 100%;
  max-width: 824px;

  ${media.LAPTOP2} {
    max-width: 684px;
  }
  ${media.LAPTOP} {
    max-width: 526px;
  }
  ${media.TABLET} {
    max-width: 551px;
  }
  ${media.PHONE} {
    max-width: 286px;
  }
`;

export const FavoiteBlockContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 32px;
  background-color: ${Colors.BLUE};
  background-image: url(${background.src});
  background-position: center;
`;

export const WhiteSectionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 50px 32px;
  background-color: ${Colors.WHITE};
`;
export const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TodayContainer = styled.div`
  padding: 140px 32px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const BlockTodayDescription = styled.p`
  ${typography.subtitle}
  color: ${Colors.WHITE};

  margin: 0 0 40px;
`;
export const BlockTodayDescriptionSecond = styled.div`
  ${typography.subtitle}
  color: ${Colors.WHITE};
  margin: 40px 0;
`;
export const AppsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
`;
export const AppImage = styled.img`
  height: 60px;
`;
