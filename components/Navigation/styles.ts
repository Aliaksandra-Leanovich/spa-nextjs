import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import Link from "next/link";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 555px;
`;
const StyledLink = styled(Link)`
  ${typography.subtitle}
  color: ${Colors.WHITE};
  text-decoration: none;
  max-width: 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export { StyledNavigation, StyledLink };
