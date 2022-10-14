import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const ContainerSC = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  ${media.TABLET} {
    display: none;
  }
`;
export const ContainerReviewsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  justify-content: center;
  align-items: center;

  margin-bottom: 60px;
`;
export const BlockReviewSC = styled.div`
  border-bottom: 1px solid ${Colors.WHITE};
  margin-bottom: 60px;
`;

export const ReviewSC = styled.div`
  padding: 60px 40px;
  background-color: ${Colors.LIGHTBLUE};
  border-radius: 10px;

  ${media.PHONE} {
    padding: 20px;
  }

  transition: background-color 0.5s ease-out, box-shadow 0.5s ease-out;
  &:hover {
    background-color: ${Colors.WHITE};
    box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
  }
  &:hover p {
    color: ${Colors.BLACK};
  }
  &:hover ${BlockReviewSC} {
    border-bottom-color: ${Colors.BLACK};
  }
`;

export const QuotesImageSC = styled.img`
  width: 86px;
  margin-bottom: 32px;
`;

export const ReviewerBlockSC = styled.div`
  display: flex;
  ${media.TABLET} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ReviewerImageSC = styled.img`
  width: 95px;
  height: 95px;
  margin-right: 42px;
  ${media.TABLET} {
    margin-right: 0px;
    margin-bottom: 24px;
  }
`;
export const ReviewerInformationSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.TABLET} {
    align-items: flex-start;
  }
`;
export const ReviewerNameSC = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${Colors.BLUE};
  ${media.TABLET} {
    margin-bottom: 24px;
  }
`;

export const ContainerMobileSC = styled.div`
  display: none;
  width: 100%;
  ${media.TABLET} {
    display: flex;
  }
`;
