import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { IStylesProps } from "./types";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.LAPTOP} {
    display: none;
  }
`;

export const StyledRightNavigation = styled.div<IStylesProps>`
  background: ${Colors.BLACK};

  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px 30px;
  position: absolute;
  top: 0;
  right: 0;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }

  ${media.PHONE} {
    width: 100%;
  }
  main {
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.LAPTOP} {
    display: grid;
    width: 100%;
    row-gap: 2rem;
  }
`;

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
`;

export const NavigationContainer = styled.div`
  display: flex;
`;
export const HoverLinkSC = styled.div`
  color: ${Colors.WHITE};
  display: flex;
  justify-content: start;
  align-items: center;
  transition: color 0.5s ease-out;

  &:hover {
    cursor: pointer;
    color: ${Colors.YELLOW};
  }
`;
export const LinkSC = styled.div`
  margin: 0 40px 0 0;
  position: relative;
  display: inline-block;

  ${media.LAPTOP} {
    margin: 0;
  }
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 10px;
`;

export const SubNavigation = styled.div<IStylesProps>`
  position: absolute;
  background-color: ${Colors.LIGHTBLUE};

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 200px;
  padding: 16px 24px 0;
`;

export const SubcategorydLinkSC = styled.a`
  color: ${Colors.WHITE};
  display: flex;
  margin-bottom: 16px;
  transition: color 0.5s ease-out;

  &:hover {
    cursor: pointer;
    color: ${Colors.YELLOW};
  }
`;

export const SubNavigationMobile = styled.div<IStylesProps>`
  padding: 10px 20px 0;
  flex-direction: column;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
