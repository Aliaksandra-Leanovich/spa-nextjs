import React from "react";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
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
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <BackgroundImageContainerSC>
        <BackgroundImageSC src={background.src} />
      </BackgroundImageContainerSC>
      <ContainerSC>
        <DescriptionContainerSC>
          <TypographySC variant={VariantsTypography.h2} color={Colors.WHITE}>
            Get More Done with whitepace
          </TypographySC>
          <TextContainerSC>
            <TypographySC
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </TypographySC>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Try Whitepace free"
            variant={LinkVariants.linkSmall}
          />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
      </ContainerSC>
    </MainContainerSC>
  );
};
