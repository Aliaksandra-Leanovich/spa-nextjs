import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work.webp";
import {
  WrapperSC,
  ContainerSC,
  ImageContainerSC,
  DescriptionContainerSC,
  DescriptionSC,
  TitleSC,
} from "./styles";
import { Colors } from "../../ui/colors";

export const CustomiseSection = () => {
  return (
    <WrapperSC background={Colors.WHITE}>
      <ContainerSC id="resources">
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        <DescriptionContainerSC>
          <TitleSC margin="0 0 24px 0" color={Colors.BLACK}>
            Customise it to your needs
          </TitleSC>
          <DescriptionSC margin="0 0 40px 0" color={Colors.BLACK}>
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </DescriptionSC>
          <LinkTemplate href="/whitepacefree" text="Lets Go" />
        </DescriptionContainerSC>
      </ContainerSC>
    </WrapperSC>
  );
};
