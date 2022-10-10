import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/worktogether.svg";
import ImageWorkManag from "/public/icons/team-work4.webp";
import {
  ManagementContainer,
  ContainerSC,
  TitleSC,
  DescriptionSC,
  DescriptionContainerSC,
  ImageContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";

export const ManagementSection = () => {
  return (
    <ManagementContainer>
      <ContainerSC id="products">
        <DescriptionContainerSC>
          <TitleSC margin="0 0 24px 0" color={Colors.BLACK}>
            Project Management
          </TitleSC>
          <DescriptionSC margin="0 0 40px 0" color={Colors.BLACK}>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
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
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </DescriptionSC>
          <LinkTemplate href="/whitepacefree" text="Try it now" />
        </DescriptionContainerSC>
      </ContainerSC>
    </ManagementContainer>
  );
};
