import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const Container = styled.div`
  display: flex;
  width: 100%;
  ${media.TABLET} {
    display: none;
  }
`;
export const ContainerReviews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  justify-content: center;
  align-items: center;

  margin-bottom: 60px;
`;
export const Review = styled.div`
  padding: 60px 40px;
  background-color: ${Colors.LIGHTBLUE};
  border-radius: 10px;

  ${media.PHONE} {
    padding: 20px;
  }

  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${Colors.WHITE};
    box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
  }
  &:hover p {
    color: ${Colors.BLACK};
  }
  &:hover #commas path {
    fill: ${Colors.BLUE};
  }
`;
export const BlockReview = styled.div`
  border-bottom: 1px solid ${Colors.WHITE};
  margin-bottom: 60px;
`;
export const QuotesImage = styled.img`
  width: 86px;
  margin-bottom: 32px;
`;
export const TextReview = styled.p`
  margin-bottom: 40px;
  ${typography.subtitle}
  color: ${Colors.WHITE};
`;

export const ReviewerBlock = styled.div`
  display: flex;
  ${media.TABLET} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ReviewerImage = styled.img`
  width: 95px;
  height: 95px;
  margin-right: 42px;
  ${media.TABLET} {
    margin-right: 0px;
    margin-bottom: 24px;
  }
`;
export const ReviewerInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.TABLET} {
    align-items: flex-start;
  }
`;
export const ReviewerName = styled.p`
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
export const ReviewerPosition = styled.p`
  ${typography.subtitle};
  color: ${Colors.WHITE};
`;
export const ContainerMobile = styled.div`
  display: none;
  width: 100%;
  ${media.TABLET} {
    display: flex;
  }
`;
