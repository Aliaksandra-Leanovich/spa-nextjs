import React from "react";
import { Colors } from "../../ui/colors";
import { H2, ParagraphSmall } from "../../ui/typography";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  SectionContainerSC,
  TextContainerSC,
} from "./styles";
import DataImg from "/public/icons/data.svg";

export const DataSection = () => {
  return (
    <SectionContainerSC
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ContainerSC>
        <DescriptionContainerSC>
          <H2 color={Colors.BLACK}>100% your data</H2>
          <TextContainerSC>
            <ParagraphSmall color={Colors.BLACK}>
              The app is open source and your notes are saved to an open format,
              so you will always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </ParagraphSmall>
          </TextContainerSC>

          <LinkTemplate href="/whitepacefree" text="Read more" />
        </DescriptionContainerSC>
        <ImageContainerSC src={DataImg.src} alt={"work together"} />
      </ContainerSC>
    </SectionContainerSC>
  );
};
