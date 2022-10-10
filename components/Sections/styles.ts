import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";
import background from "/public/icons/mainbackground.svg";
import managBackground from "/public/icons/managmentbackground.svg";
import favoriteBackground from "/public/icons/favoriteBackground.svg";

interface IProps {
  color?: string;
  margin?: string;
  background?: string;
}

export const MainContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 131px 220px 0;
  background-color: ${Colors.BLUE};
  ${media.LAPTOP2} {
    padding: 131px 34px 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${background.src});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.3;
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
export const TitleSC = styled.h2<IProps>`
  ${typography.H2}
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const DescriptionSC = styled.p<IProps>`
  ${typography.subtitle}
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const ImageContainerSC = styled.img`
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

export const AppsContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
`;
export const AppImageSC = styled.img`
  height: 60px;
`;

export const ManagementContainer = styled.section`
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 50px 220px;
  background-color: ${Colors.WHITE};

  ${media.LAPTOP2} {
    padding: 50px 34px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${managBackground.src});
    background-repeat: no-repeat;
    background-position: 57px 125px;
    width: 100%;
    height: 100%;
  }
`;

export const FavoiteContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-position: center;
  position: relative;

  padding: 140px 220px 0;
  background-color: ${Colors.BLUE};
  ${media.LAPTOP2} {
    padding: 131px 34px 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${favoriteBackground.src});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;
export const ContainerEverywhereSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${media.LAPTOP2} {
    justify-content: flex-start;
    align-items: flex-start;
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

export const WrapperSC = styled.section<IProps>`
  width: 100%;
  background-color: ${({ background }) => background};

  margin: 0 auto;
  width: 100%;
  padding: 50px 220px;
  ${media.LAPTOP2} {
    padding: 0 34px;
  }
`;
export const EverywhereContainerSC = styled.section<IProps>`
  margin: 0 auto;
  width: 100%;
  padding: 140px 220px;
  background-color: ${({ background }) => background};

  position: relative;
  ${media.LAPTOP2} {
    padding: 132px 34px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${managBackground.src});
    background-repeat: no-repeat;
    background-position: 1px 125px;
    width: 100%;
    height: 100%;
  }
`;

export const SponsorsBlockContainer = styled.section<IProps>`
  margin: 0 auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ background }) => background};

  padding: 140px 220px;
  ${media.LAPTOP2} {
    padding: 140px 34px;
  }
`;

export const SponsorsContainerSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.TABLET} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SponsorsImageSC = styled.img`
  height: 71px;
  ${media.TABLET} {
    margin-bottom: 100px;
  }
`;
