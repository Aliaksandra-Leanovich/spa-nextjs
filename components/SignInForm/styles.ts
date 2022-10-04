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

  background-color: #043873;
  border-radius: 10px;
`;

export const StyledInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  padding: 16px;
  width: 100%;

  border-radius: 20px;
  border: 2px solid black;

  &::placeholder {
    color: black;
  }
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

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;
export const StyledLink = styled.a`
  color: ${Colors.BLUE};
  ${typography.bodytext}

  border-bottom: 1px solid ${Colors.BLUE};
  cursor: pointer;

  &:hover {
    color: ${Colors.YELLOW};
    border-bottom: 1px solid ${Colors.YELLOW};
  }
`;
export const FormTitle = styled.h3`
  ${typography.H3}
`;
