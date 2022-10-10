import styled from "@emotion/styled";

export const StyledInputSC = styled.input`
  font-weight: 16px;
  line-height: 20px;

  padding: 16px;
  width: 100%;
  border: none;
  border-bottom: 2px solid black;

  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const ContainerSC = styled.div`
  grid-template-rows: repeat(2, 1fr);
  row-gap: 15px;
`;
export const ErrorMessageSC = styled.p`
  position: absolute;
`;