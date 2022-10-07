import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/team-work.webp";

import {
  WhiteSectionContainer,
  ContainerBlock,
  BlockTitleBlack,
  BlockDescriptionBlack,
  ContainerDescription,
  ImageContainer,
} from "./styles";

export const CustomiseBlock = () => {
  return (
    <WhiteSectionContainer>
      <ContainerBlock id="resources">
        <ContainerDescription>
          <BlockTitleBlack>Customise it to your needs</BlockTitleBlack>
          <BlockDescriptionBlack>
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </BlockDescriptionBlack>
          <LinkTemplate href="/whitepacefree" text="Lets Go" />
        </ContainerDescription>
        <ImageContainer src={ImageWork.src} alt={"work together"} />
      </ContainerBlock>
    </WhiteSectionContainer>
  );
};
