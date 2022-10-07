import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 220px;

  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${Colors.BLUE};

  ${media.LAPTOP2} {
    padding: 16px 34px;
  }
`;

export const LogoContainer = styled.div`
  max-width: 191px;
`;

export { StyledHeader };
