import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
export const StyledForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 600px;

  padding: 50px;

  background-color: ${Colors.WHITE};
  border-radius: 15px;
`;

export const StyledButton = styled.button`
  ${typography.button}

  color: white;
  background-color: #4f9cf9;

  width: 100%;
  padding: 14px;

  border-radius: 25px;
  border: none;

  cursor: pointer;
`;
export const ErrorMessage = styled.p`
  position: absolute;
`;
export const ErrorMessage1 = styled.p`
  position: absolute;
`;
export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.BLUE};
  position: relative;
`;
export const StyledLink = styled.a`
  color: ${Colors.YELLOW};
  ${typography.bodytext}
  text-decoration: underline;

  cursor: pointer;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
export const FormTitle = styled.h3`
  ${typography.H3}
  color: ${Colors.WHITE};
  text-align: center;
`;
