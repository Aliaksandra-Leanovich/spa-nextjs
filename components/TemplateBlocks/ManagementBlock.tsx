import React from "react";
import {
  ManagementContainer,
  ContainerBlock,
  BlockTitleBlack,
  BlockDescriptionBlack,
  BlockButton,
  ContainerDescription,
  ContainerBlue,
} from "./styles";

export const ManagementBlock = () => {
  return (
    <ManagementContainer>
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitleBlack>Project Management</BlockTitleBlack>
          <BlockDescriptionBlack>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </BlockDescriptionBlack>
          <BlockButton>Get Started</BlockButton>
        </ContainerDescription>
        <ContainerBlue />
      </ContainerBlock>
      <ContainerBlock>
        <ContainerBlue />
        <ContainerDescription>
          <BlockTitleBlack>Work together</BlockTitleBlack>
          <BlockDescriptionBlack>
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </BlockDescriptionBlack>
          <BlockButton>Try it now</BlockButton>
        </ContainerDescription>
      </ContainerBlock>
    </ManagementContainer>
  );
};
