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

export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.BLUE};
`;

export const FormTitle = styled.h3`
  ${typography.H3}
  color: ${Colors.WHITE};
  text-align: center;
`;

export const NoUserMessage = styled.p``;
