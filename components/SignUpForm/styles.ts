import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";

export const StyledFormSC = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 600px;

  padding: 50px;

  background-color: ${Colors.WHITE};
  border-radius: 15px;
`;

export const ContainerFormSC = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.BLUE};
  position: relative;
`;
