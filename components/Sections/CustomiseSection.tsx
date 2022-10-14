import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work.webp";
import {
  ContainerSC,
  ImageContainerSC,
  DescriptionContainerSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const CustomiseSection = () => {
  return (
    <WhiteContainerSC>
      <ContainerSC id="resources">
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        <DescriptionContainerSC>
          <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
            Customise it to your needs
          </TypographySC>
          <TextContainerSC>
            <TypographySC
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </TypographySC>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Lets Go"
            padding="20px 40px"
          />
        </DescriptionContainerSC>
      </ContainerSC>
    </WhiteContainerSC>
  );
};
