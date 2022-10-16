import React from "react";
import { Colors } from "../../ui/colors";
import { TypographySC, VariantsTypography } from "../../ui/typography";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import DataImg from "/public/icons/data.svg";

export const DataSection = () => {
  return (
    <WhiteContainerSC>
      <ContainerSC>
        <DescriptionContainerSC>
          <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
            100% your data
          </TypographySC>
          <TextContainerSC>
            <TypographySC
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              The app is open source and your notes are saved to an open format,
              so you will always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </TypographySC>
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
