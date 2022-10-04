import React from "react";
import { Header } from "../Header/Header";
import {
  MainContainer,
  ContainerBlock,
  BlockTitle,
  BlockDescription,
  BlockButton,
  ContainerDescription,
  ContainerBlue,
} from "./styles";

export const MainBlock = () => {
  return (
    <MainContainer>
      <Header />
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitle>Get More Done with whitepace</BlockTitle>
          <BlockDescription>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </BlockDescription>
          <BlockButton>Try Whitepace free</BlockButton>
        </ContainerDescription>
        <ContainerBlue />
      </ContainerBlock>
    </MainContainer>
  );
};
