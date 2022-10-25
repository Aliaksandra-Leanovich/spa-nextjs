import React from "react";
import ImageWork from "/public/icons/team-work.webp";
import {
  ContainerSC,
  ImageContainerSC,
  DescriptionContainerSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

export const CustomiseSection = () => {
  return (
    <WhiteContainerSC>
      <ContainerSC id="resources">
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        <DescriptionContainerSC>
          <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
            Customise it to your needs
          </Typography>
          <TextContainerSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </Typography>
          </TextContainerSC>

          <Link
            href="/whitepacefree"
            text="Lets Go"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
      </ContainerSC>
    </WhiteContainerSC>
  );
};
