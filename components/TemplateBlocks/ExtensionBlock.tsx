import React from "react";

import {
  MainContainer,
  ContainerBlock,
  BlockTitle,
  BlockDescription,
  BlockButton,
  ContainerDescription,
  ContainerBlue,
} from "./styles";

export const ExtensionBlock = () => {
  return (
    <MainContainer>
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitle>Use as Extension</BlockTitle>
          <BlockDescription>
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </BlockDescription>
          <BlockButton>Lets Go</BlockButton>
        </ContainerDescription>
        <ContainerBlue />
      </ContainerBlock>
    </MainContainer>
  );
};
