import React from "react";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { LinkVariants } from "../LinkTemplate/types";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import DataImg from "/public/icons/data.jpg";

export const DataSection = () => {
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

          <LinkTemplate
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
