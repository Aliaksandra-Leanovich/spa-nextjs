import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const StyledHeaderSC = styled.header`
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

  ${media.DESKTOP} {
    padding: 16px 34px;
  }
`;

export const LogoContainerSC = styled.a`
  max-width: 192px;
  cursor: pointer;
`;
