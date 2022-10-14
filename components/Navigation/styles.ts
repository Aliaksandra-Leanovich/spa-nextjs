import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

interface IProps {
  open: boolean;
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.LAPTOP} {
    display: none;
  }
`;

export const StyledRightNavigation = styled.div<IProps>`
  background: ${Colors.BLACK};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  ${media.PHONE} {
    width: 100%;
  }
  body {
    overflow: ${({ open }) => (open ? "hidden" : "auto")};
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.LAPTOP} {
    display: grid;
    row-gap: 2rem;
  }
`;

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
`;

const NavigationContainer = styled.div`
  display: flex;
`;
export const HoverLinkSC = styled.a`
  color: ${Colors.WHITE};
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.02em;
  margin: 0 40px 0 0;
  &:hover {
    cursor: pointer;
    color: ${Colors.YELLOW};
  }
  ${media.TABLET} {
    margin: 30px 0 0;
  }
`;
export { StyledNavigation, NavigationContainer };
