import React from "react";
import { Colors } from "../../ui/colors";
import { Typography } from "../../ui/Typography";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

import {
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import ImageWork from "/public/icons/team-work4.png";
import UnderlinedTitle from "../Underline/Underline";
import underline from "/public/icons/underline.png";

export const ExtensionSection = () => {
  return (
    <BlueContainerSC>
      <WrapperSC>
        <ContainerSC id="solutions">
          <DescriptionContainerSC>
            <UnderlinedTitle
              img={underline.src}
              color={Colors.WHITE}
              css={{
                width: "60%",
                height: "24px",
                left: "44%",
                top: "72%",
                "@media  (max-width: 1589px)": {
                  left: "0%",
                  top: "88%",
                },
                "@media (max-width: 1440px)": {
                  left: "44%",
                  top: "72%",
                },
                "@media (max-width: 1217px)": {
                  left: "0%",
                  top: "88%",
                },
                "@media (max-width: 529px)": {
                  left: "26%",
                  top: "88%",
                },
                "@media (max-width: 400px)": {
                  left: "10%",
                  top: "78%",
                },
              }}
            >
              Use as Extension
            </UnderlinedTitle>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Lets Go"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
