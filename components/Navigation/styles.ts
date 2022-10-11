import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationContainer = styled.div`
  display: flex;
`;

export { StyledNavigation, NavigationContainer };
