import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

interface IProps {
  color: string;
  background: string;
  padding: string;
}

export const StyledButtonSC = styled.button<IProps>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};

  ${typography.button}

  margin-right: 26px;

  border: none;
  border-radius: 8px;

  ${media.LAPTOP} {
    margin-right: 0;
    margin-bottom: 20px;
  }
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    transform: translateY(-2px);
  }
`;
