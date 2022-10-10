import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledFooterSC = styled.footer`
  width: 100%;

  background-color: ${Colors.BLUE};

  padding: 140px 220px 34px;
  ${media.LAPTOP2} {
    padding: 140px 34px 34px;
  }
`;

export const ContainerFooterSC = styled.div`
  display: grid;
  grid-template-columns: 2.4fr 1fr 1.2fr 0.6fr 2fr;
  column-gap: 100px;
  padding-bottom: 80px;
  margin-bottom: 100px;

  border-bottom: 1px solid ${Colors.WHITE};

  ${media.LAPTOP} {
    grid-template-columns: 1fr;
    row-gap: 100px;
    border: none;
    padding-bottom: 0;
  }
  ${media.PHONE} {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: none;
    margin-bottom: 80px;
  }
`;

export const BlockWithLinksSC = styled.div`
  display: grid;
  row-gap: 15px;
`;
export const BlockWithButtonSC = styled.div`
  display: grid;
  row-gap: 24px;
`;
export const LogoContainerSC = styled.img`
  height: 34px;
`;

export const CategoryFooterSC = styled.p`
  color: ${Colors.WHITE};
  ${typography.paragraph2}
`;

export const TextFooterSC = styled.p`
  ${typography.bodytext}
  color: ${Colors.WHITE};
`;
export const DecriptionFooterSC = styled.p`
  color: ${Colors.WHITE};
  ${typography.paragraph2};
  font-weight: 400;
`;

export const TitleFooterSC = styled.h5`
  color: ${Colors.WHITE};
  ${typography.H5}
`;
export const SmallCategoryFooterSC = styled.p`
  ${typography.paragraph3}
  color: ${Colors.WHITE};

  &:hover {
    color: ${Colors.YELLOW};
    cursor: pointer;
  }
`;
export const CategoryFooterDescriptionSC = styled.p`
  ${typography.paragraph3}
  color: ${Colors.WHITE};
  margin-right: 60px;

  &:hover {
    color: ${Colors.YELLOW};
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.TABLET} {
    margin-right: 0;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const EnglishContainerSC = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1.2fr;
  column-gap: 6px;
  align-items: center;
`;
export const BottomFooterContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.TABLET} {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  ${media.PHONE} {
    align-items: center;
    justify-content: center;
  }
`;
export const BottomFooterDecriptionSC = styled.div`
  display: flex;

  ${media.TABLET} {
    border-bottom: 1px solid ${Colors.WHITE};
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
  ${media.TABLET} {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const SocialMediaContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  ${media.TABLET} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ArrowImageSC = styled.img`
  height: 10px;
`;

export const WorldImageSC = styled.img`
  height: 18px;
`;

export const SocialMediaImageSC = styled.img`
  height: 16px;
`;
