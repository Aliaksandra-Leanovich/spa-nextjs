import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/worktogether.svg";
import ImageWorkManag from "/public/team-work4.webp";
import {
  ManagementContainer,
  ContainerBlock,
  BlockTitleBlack,
  BlockDescriptionBlack,
  ContainerDescription,
  ImageContainer,
} from "./styles";

export const ManagementBlock = () => {
  return (
    <ManagementContainer>
      <ContainerBlock id="products">
        <ContainerDescription>
          <BlockTitleBlack>Project Management</BlockTitleBlack>
          <BlockDescriptionBlack>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </BlockDescriptionBlack>
          <LinkTemplate href="/whitepacefree" text="Get Started" />
        </ContainerDescription>
        <ImageContainer src={ImageWorkManag.src} alt={"work together"} />
      </ContainerBlock>

      <ContainerBlock>
        <ImageContainer src={ImageWork.src} alt={"work together"} />

        <ContainerDescription>
          <BlockTitleBlack>Work together</BlockTitleBlack>
          <BlockDescriptionBlack>
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </BlockDescriptionBlack>
          <LinkTemplate href="/whitepacefree" text="Try it now" />
        </ContainerDescription>
      </ContainerBlock>
    </ManagementContainer>
  );
};
