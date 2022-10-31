import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const MainContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 132px 220px 0;
  background-color: ${Colors.BLUE};

  ${media.DESKTOP} {
    padding: 132px 34px 0;
  }
  ${media.PHONE} {
    padding: 0;
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
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    row-gap: 100px;
    column-gap: 0;
    padding: 80px 0 30px;
  }
  ${media.PHONE} {
    row-gap: 80px;
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

export const ImageContainerSC = styled.div`
  position: relative;
  background-color: inherit;
  padding-top: 75%;
  width: 100%;
`;
export const ImageSC = styled.img`
  margin: 0 auto;
  position: absolute;
  inset: 0;
  object-fit: contain;
  max-width: 824px;
  width: 100%;
  height: 480px;

  ${media.DESKTOP} {
    max-width: 684px;
  }
  ${media.LAPTOP} {
    max-width: 526px;
  }
  ${media.TABLET} {
    max-width: 552px;
  }
  ${media.PHONE} {
    max-width: 286px;
  }
`;
export const SvgContainerSC = styled.div`
  width: 100%;
  max-width: 824px;

  ${media.DESKTOP} {
    max-width: 684px;
  }
  ${media.LAPTOP} {
    max-width: 526px;
  }
  ${media.TABLET} {
    max-width: 552px;
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
export const AppImageSC = styled.div`
  height: 60px;
`;

export const ContainerYourWorkSC = styled.div`
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
export const TextContainerSliderSC = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const FreeTrialContainerSC = styled.div`
  padding: 140px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
`;
export const WhiteContainerSC = styled.section`
  background-color: ${Colors.WHITE};
  padding: 140px 220px;
  position: relative;
  width: 100%;

  ${media.DESKTOP} {
    padding: 140px 34px;
  }
  ${media.TABLET} {
    padding: 90px 16px;
  }
`;
export const BlueContainerSC = styled.section`
  background-color: ${Colors.BLUE};
  padding: 140px 220px;
  position: relative;
  width: 100%;

  ${media.DESKTOP} {
    padding: 140px 34px;
  }
  ${media.TABLET} {
    padding: 90px 16px;
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

export const SponsorsImageSC = styled.div`
  height: 72px;
  ${media.LAPTOP} {
    margin-bottom: 100px;
  }
`;

export const MainBackgrounSC = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.3;
`;
export const BackgroundImageAppsSC = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const BackgroundImageContainerManagSC = styled.div`
  position: absolute;
  z-index: 0;
  left: -80px;
  top: 160px;

  opacity: 0.6;
`;
export const BackgroundImageContainerYourWorkSC = styled.div`
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
export const SliderContainerSC = styled.div`
  background-color: ${Colors.WHITE};
  padding: 140px 220px;
  position: relative;
  width: 100%;

  ${media.DESKTOP} {
    padding: 140px 34px;
  }
  ${media.TABLET} {
    padding: 90px 0;
  }
`;
export const TextContainerSC = styled.div`
  margin: 24px 0 60px 0;
`;
export const TextContainerFreeTrialSC = styled.div`
  margin: 24px 0 40px 0;
`;
export const TextContainerFreeTrialSecondSC = styled.div`
  margin: 40px 0;
`;
export const FreeTrialTitleSC = styled.h2`
  color: ${Colors.WHITE};
  font-family: "Inter";
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  letter-spacing: -0.02em;

  ${media.TABLET} {
    font-size: 54px;
    line-height: 66px;
  }
  ${media.PHONE} {
    font-size: 36px;
    line-height: 44px;
  }

  & span {
    ${media.DESKTOP} {
      display: block;
    }
  }
`;
export const WrapperSC = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;
