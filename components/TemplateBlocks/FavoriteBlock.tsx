import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  BlockDescription,
  BlockTitle,
  ContainerBlock,
  ContainerDescription,
  FavoiteBlockContainer,
  ImageContainer,
} from "./styles";
import ImageApps from "/public/Apps.svg";

export const FavoriteBlock = () => {
  return (
    <FavoiteBlockContainer>
      <ContainerBlock>
        <ImageContainer src={ImageApps.src} alt={"work together"} />
        <ContainerDescription>
          <BlockTitle>Work with Your Favorite Apps Using whitepace</BlockTitle>
          <BlockDescription>
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </BlockDescription>
          <LinkTemplate href="/whitepacefree" text="Read more" />
        </ContainerDescription>
      </ContainerBlock>
    </FavoiteBlockContainer>
  );
};
