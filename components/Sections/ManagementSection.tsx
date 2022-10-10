import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/worktogether.svg";
import ImageWorkManag from "/public/icons/team-work4.webp";
import managBackground from "/public/icons/managmentbackground.svg";
import {
  ContainerSC,
  TitleSC,
  DescriptionSC,
  DescriptionContainerSC,
  ImageContainerSC,
  BackgroundImageContainerManagSC,
  BackgroundImageSC,
  WrapperSC,
  SectionContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";

export const ManagementSection = () => {
  return (
    <SectionContainerSC background={Colors.WHITE}>
      <BackgroundImageContainerManagSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerManagSC>
      <WrapperSC
        padding="140px 220px"
        mobilePadding="80px 16px"
        tabletPadding="140px 32px"
      >
        <ContainerSC id="products">
          <DescriptionContainerSC>
            <TitleSC margin="0 0 24px 0" color={Colors.BLACK}>
              Project Management
            </TitleSC>
            <DescriptionSC margin="0 0 40px 0" color={Colors.BLACK}>
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </DescriptionSC>
            <LinkTemplate href="/whitepacefree" text="Get Started" />
          </DescriptionContainerSC>
          <ImageContainerSC src={ImageWorkManag.src} alt={"work together"} />
        </ContainerSC>

        <ContainerSC>
          <ImageContainerSC src={ImageWork.src} alt={"work together"} />

          <DescriptionContainerSC>
            <TitleSC>Work together</TitleSC>
            <DescriptionSC>
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </DescriptionSC>
            <LinkTemplate href="/whitepacefree" text="Try it now" />
          </DescriptionContainerSC>
        </ContainerSC>
      </WrapperSC>
    </SectionContainerSC>
  );
};
