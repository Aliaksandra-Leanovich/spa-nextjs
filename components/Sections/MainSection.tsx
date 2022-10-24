import React from "react";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work1.png";
import background from "/public/icons/mainbackground.png";
import { Colors } from "../../ui/colors";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  MainBackgrounSC,
  MainContainerSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <MainBackgrounSC src={background.src} />
      <WrapperSC>
        <ContainerSC>
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h2} color={Colors.WHITE}>
              Get More Done with whitepace
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </Typography>
            </TextContainerSC>

            <LinkTemplate
              href="/whitepacefree"
              text="Try Whitepace free"
              variant={LinkVariants.linkSmall}
            />
          </DescriptionContainerSC>
          <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        </ContainerSC>
      </WrapperSC>
    </MainContainerSC>
  );
};
