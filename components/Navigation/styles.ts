import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { media } from "../../ui/media";

interface IProps {
  open: boolean;
}

export const StyledNavigationSC = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.LAPTOP} {
    display: none;
  }
`;
export const StyledLinkSC = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`;
export const TextLinkSC = styled.span`
  ${typography.subtitle}
  color: ${Colors.WHITE};
  cursor: pointer;
  &:hover {
    color: ${Colors.YELLOW};
  }
`;

export const StyledRightNavigationSC = styled.div<IProps>`
  background: ${Colors.BLACK};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  ${media.PHONE} {
    width: 100%;
  }
`;
export const ContainerLinksSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.LAPTOP} {
    display: grid;
    row-gap: 2rem;
  }
`;

export const ContainerButtonsSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationContainerSC = styled.div`
  display: flex;
`;