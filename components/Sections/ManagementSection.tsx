import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/worktogether.svg";
import ImageWorkManag from "/public/icons/team-work4.webp";
import managBackground from "/public/icons/managmentbackground.svg";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  BackgroundImageContainerManagSC,
  BackgroundImageSC,
  SectionContainerSC,
  TextContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { H2, ParagraphSmall } from "../../ui/typography";

export const ManagementSection = () => {
  return (
    <SectionContainerSC
      background={Colors.WHITE}
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 32px"
    >
      <BackgroundImageContainerManagSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerManagSC>

      <ContainerSC id="products">
        <DescriptionContainerSC>
          <H2 color={Colors.BLACK}>Project Management</H2>
          <TextContainerSC>
            <ParagraphSmall color={Colors.BLACK}>
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </ParagraphSmall>
          </TextContainerSC>

          <LinkTemplate href="/whitepacefree" text="Get Started" />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWorkManag.src} alt={"work together"} />
      </ContainerSC>

      <ContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />

        <DescriptionContainerSC>
          <H2 color={Colors.BLACK}>Work together</H2>
          <TextContainerSC>
            <ParagraphSmall color={Colors.BLACK}>
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </ParagraphSmall>
          </TextContainerSC>

          <LinkTemplate href="/whitepacefree" text="Try it now" />
        </DescriptionContainerSC>
      </ContainerSC>
    </SectionContainerSC>
  );
};
