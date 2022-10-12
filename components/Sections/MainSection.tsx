import React from "react";
import { Header } from "../Header/Header";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work1.webp";
import background from "/public/icons/mainbackground.svg";
import { Colors } from "../../ui/colors";
import {
  BackgroundImageContainerSC,
  BackgroundImageSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  MainContainerSC,
  TextContainerSC,
} from "./styles";
import { H2, ParagraphSmall } from "../../ui/typography";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <Header />
      <BackgroundImageContainerSC>
        <BackgroundImageSC src={background.src} />
      </BackgroundImageContainerSC>
      <ContainerSC>
        <DescriptionContainerSC>
          <H2 color={Colors.WHITE}>Get More Done with whitepace</H2>
          <TextContainerSC margin=" 24px 0 60px 0">
            <ParagraphSmall color={Colors.WHITE}>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </ParagraphSmall>
          </TextContainerSC>

          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
      </ContainerSC>
    </MainContainerSC>
  );
};
