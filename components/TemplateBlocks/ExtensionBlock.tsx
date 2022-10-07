import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/team-work3.webp";

import {
  MainContainer,
  ContainerBlock,
  BlockTitle,
  BlockDescription,
  ContainerDescription,
  ImageContainer,
} from "./styles";

export const ExtensionBlock = () => {
  return (
    <MainContainer>
      <ContainerBlock id="solutions">
        <ContainerDescription>
          <BlockTitle>Use as Extension</BlockTitle>
          <BlockDescription>
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </BlockDescription>
          <LinkTemplate href="/whitepacefree" text="Lets Go" />
        </ContainerDescription>
        <ImageContainer src={ImageWork.src} alt={"work together"} />
      </ContainerBlock>
    </MainContainer>
  );
};
