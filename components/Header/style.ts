import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { media } from "../../ui/media";
import Link from 'next/link';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 34px;
  width: 100%;
`;
const StyledLogo = styled(Link)`
  width: 191px;
  ${media.PHONE} {
    width: 134px;
  }
`;
const LogOutBtn = styled.button`
  ${typography.button}
  color: ${Colors.BLUE};
  padding: 16px 40px;
  background-color: ${Colors.YELLOW};
  border: none;
  border-radius: 8px;
`;
export { StyledHeader, LogOutBtn, StyledLogo };