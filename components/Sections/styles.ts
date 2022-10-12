import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

interface IProps {
  color?: string;

  background?: string;
  backgroundImage?: string;

  padding?: string;
  mobilePadding?: string;
  tabletPadding?: string;

  margin?: string;
  mobileMargin?: string;
  tabletMargin?: string;
  laptopMargin?: string;
  laptop2Margin?: string;
}

export const MainContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 131px 220px 0;
  background-color: ${Colors.BLUE};
  ${media.DESKTOP} {
    padding: 131px 34px 0;
  }
`;

export const ContainerSC = styled.div`
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

export const DescriptionContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  ${media.TABLET} {
    align-items: center;
    text-align: center;
  }
`;

export const ImageContainerSC = styled.img`
  width: 100%;
  max-width: 824px;

  ${media.DESKTOP} {
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

export const AppsContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
`;
export const AppImageSC = styled.img`
  height: 60px;
`;

export const ContainerEverywhereSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${media.DESKTOP} {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
  }
`;
export const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TodayContainerSC = styled.div`
  padding: 140px 32px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const SectionContainerSC = styled.section<IProps>`
  background-color: ${({ background }) => background};
  position: relative;
  width: 100%;
  padding: ${({ padding }) => padding};
  ${media.DESKTOP} {
    padding: ${({ tabletPadding }) => tabletPadding};
  }
  ${media.TABLET} {
    padding: ${({ mobilePadding }) => mobilePadding};
  }
`;

export const SponsorsContainerSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  ${media.LAPTOP} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SponsorsImageSC = styled.img`
  height: 71px;
  ${media.LAPTOP} {
    margin-bottom: 100px;
  }
`;
export const BackgroundImageContainerSC = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;

  opacity: 0.3;
`;

export const BackgroundImageContainerManagSC = styled.div`
  position: absolute;
  z-index: 0;
  left: -80px;
  top: 160px;

  opacity: 0.6;
`;
export const BackgroundImageContainerEverywhSC = styled.div`
  position: absolute;
  z-index: 0;
  left: -100px;
  top: -210px;

  opacity: 0.6;

  ${media.DESKTOP} {
    left: -250px;
    top: -200px;
  }
  ${media.TABLET} {
    left: -200px;
    top: -210px;
  }
  ${media.PHONE} {
    display: none;
  }
`;

export const BackgroundImageSC = styled.img`
  width: 100%;
`;
export const BackgroundImageFavSC = styled.img`
  width: 100%;
`;

export const TextContainerSC = styled.div<IProps>`
  margin: ${({ margin }) => margin};

  ${media.DESKTOP} {
    margin: ${({ laptop2Margin }) => laptop2Margin};
  }
  ${media.LAPTOP} {
    margin: ${({ laptopMargin }) => laptopMargin};
  }
  ${media.TABLET} {
    margin: ${({ tabletMargin }) => tabletMargin};
  }
  ${media.PHONE} {
    margin: ${({ mobileMargin }) => mobileMargin};
  }
`;
