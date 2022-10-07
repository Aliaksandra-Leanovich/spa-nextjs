import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  BlockDescription,
  BlockTitle,
  ContainerBlock,
  TextContainer,
} from "./style";

export const EveryWhereBlock = () => {
  return (
    <ContainerBlock>
      <TextContainer>
        <BlockTitle>Your work, everywhere you are</BlockTitle>
        <BlockDescription>
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </BlockDescription>
        <LinkTemplate href="/whitepacefree" text="Try Taskey" />
      </TextContainer>
    </ContainerBlock>
  );
};
