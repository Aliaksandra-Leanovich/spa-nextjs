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

export const CustomiseBlock = () => {
  return (
    <ManagementContainer>
      <ContainerBlock>
        <ContainerDescription>
          <BlockTitleBlack>Customise it to your needs</BlockTitleBlack>
          <BlockDescriptionBlack>
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </BlockDescriptionBlack>
          <BlockButton>Lets Go</BlockButton>
        </ContainerDescription>
        <ContainerBlue />
      </ContainerBlock>
    </ManagementContainer>
  );
};
