import React from "react";
import { Link } from "../Link/Link";
import ImageWork from "/public/icons/team-work1.png";
import background from "/public/icons/mainbackground.png";
import { Colors } from "../../ui/colors";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  MainBackgrounSC,
  MainContainerSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
<<<<<<< HEAD
import { Typography } from "../../ui/typography";
import { VariantsTypography } from "../../enums/TypographyVariants";
=======
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
>>>>>>> 3cc03b2f252476d29918b90ece12a4260990ff6e

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

            <Link
              href="/whitepacefree"
              text="Try Whitepace free"
              variant={LinkVariants.linkSmall}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </MainContainerSC>
  );
};
