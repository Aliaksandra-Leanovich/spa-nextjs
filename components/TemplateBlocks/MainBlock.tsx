import React from "react";
import { Header } from "../Header/Header";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/team-work1.webp";
import {
  MainContainer,
  ContainerBlock,
  BlockTitle,
  BlockDescription,
  ContainerDescription,
  ImageContainer,
  MainBlockContainer,
} from "./styles";

export const MainBlock = () => {
  return (
    <MainBlockContainer>
      <Header />
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitle>Get More Done with whitepace</BlockTitle>
          <BlockDescription>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </BlockDescription>
          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </ContainerDescription>
        <ImageContainer src={ImageWork.src} alt={"work together"} />
      </ContainerBlock>
    </MainBlockContainer>
  );
};
