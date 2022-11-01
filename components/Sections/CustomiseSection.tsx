import React from "react";
import ImageWork from "/public/icons/team-work.webp";
import {
  ContainerSC,
  ImageContainerSC,
  DescriptionContainerSC,
  TextContainerSC,
  WhiteContainerSC,
  WrapperSC,
  ImageSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Typography } from "../../ui/Typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

export const CustomiseSection = () => {
  return (
    <WhiteContainerSC>
      <WrapperSC>
        <ContainerSC id="resources">
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
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
      </WrapperSC>
    </WhiteContainerSC>
  );
};
