import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledFooter = styled.footer`
  width: 100%;

  background-color: ${Colors.BLUE};

  padding: 140px 220px 34px;
  ${media.LAPTOP2} {
    padding: 140px 34px 34px;
  }
`;

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: 2.4fr 1fr 1.2fr 0.6fr 2fr;
  column-gap: 100px;
  padding-bottom: 80px;
  margin-bottom: 100px;

  border-bottom: 1px solid ${Colors.WHITE};

  //!!! Tablet
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

export const BlockWithLinks = styled.div`
  display: grid;
  row-gap: 15px;
`;
export const BlockWithButton = styled.div`
  display: grid;
  row-gap: 23px;
`;
export const LogoContainer = styled.img`
  height: 34px;
`;

export const CategoryFooter = styled.p`
  color: ${Colors.WHITE};
  ${typography.paragraph2}
`;

export const TextFooter = styled.p`
  ${typography.bodytext}
  color: ${Colors.WHITE};
`;
export const DecriptionFooter = styled.p`
  color: ${Colors.WHITE};
  ${typography.paragraph2};
  font-weight: 400;
`;

export const TitleFooter = styled.h5`
  color: ${Colors.WHITE};
  ${typography.H5}
`;
export const SmallCategoryFooter = styled.div`
  ${typography.paragraph3}
  color: ${Colors.WHITE};
  &:hover {
    color: ${Colors.YELLOW};
    cursor: pointer;
  }
`;

export const EnglishContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1.2fr;
  column-gap: 6px;
  align-items: center;
`;
export const BottomFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
export const BottomFooterDecription = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 60px;

  ${media.TABLET} {
    border-bottom: 1px solid ${Colors.WHITE};
    padding-bottom: 20px;
    column-gap: 20px;
    margin-bottom: 40px;
  }
  ${media.PHONE} {
    display: grid;
    row-gap: 20px;
    text-align: center;
    justify-content: center;
  }
`;
export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
`;

export const ArrowImage = styled.img`
  height: 10px;
`;

export const WorldImage = styled.img`
  height: 19px;
`;

export const SocialMediaImage = styled.img`
  height: 17px;
`;
