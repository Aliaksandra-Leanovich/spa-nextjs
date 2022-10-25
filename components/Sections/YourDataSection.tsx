import React from "react";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import DataImg from "/public/icons/data.jpg";

export const YourDataSection = () => {
  return (
    <WhiteContainerSC>
      <ContainerSC>
        <DescriptionContainerSC>
          <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
            100% your data
          </Typography>
          <TextContainerSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              The app is open source and your notes are saved to an open format,
              so you will always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </Typography>
          </TextContainerSC>

          <Link
            href="/whitepacefree"
            text="Read more"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
        <ImageContainerSC src={DataImg.src} alt={"work together"} />
      </ContainerSC>
    </WhiteContainerSC>
  );
};
