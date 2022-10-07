import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import DataImg from "/public/data.svg";
import {
  WhiteSectionContainer,
  BlockDescriptionBlack,
  BlockTitleBlack,
  ContainerBlock,
  ContainerDescription,
  ImageContainer,
} from "./styles";

export const DataBlock = () => {
  return (
    <WhiteSectionContainer>
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitleBlack>100% your data</BlockTitleBlack>
          <BlockDescriptionBlack>
            The app is open source and your notes are saved to an open format,
            so you will always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </BlockDescriptionBlack>
          <LinkTemplate href="/whitepacefree" text="Read more" />
        </ContainerDescription>
        <ImageContainer src={DataImg.src} alt={"work together"} />
      </ContainerBlock>
    </WhiteSectionContainer>
  );
};
