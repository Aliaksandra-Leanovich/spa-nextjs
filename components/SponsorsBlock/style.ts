import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const SponsorsBlockContainer = styled.section`
  margin: 0 auto;
  width: 100%;

  background-color: ${Colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 140px 220px;
  ${media.LAPTOP2} {
    padding: 140px 34px;
  }
`;
export const BlockTitleBlack = styled.h2`
  ${typography.H2}
  color: ${Colors.BLACK};
  margin-bottom: 100px;
`;
export const AppsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.TABLET} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const AppImage = styled.img`
  height: 71px;
  ${media.TABLET} {
    margin-bottom: 100px;
  }
`;
