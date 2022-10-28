import React from "react";
import ImageWork from "/public/icons/worktogether.jpg";
import ImageWorkManag from "/public/icons/team-work3.png";
import Background from "/public/icons/managmentbackground.svg";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  BackgroundImageContainerManagSC,
  TextContainerSC,
  WhiteContainerSC,
  ImageSC,
  WrapperSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

export const ManagementSection = () => {
  return (
    <WhiteContainerSC>
      <BackgroundImageContainerManagSC>
        <Background />
      </BackgroundImageContainerManagSC>
      <WrapperSC>
        <ContainerSC id="products">
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
              Project Management
            </Typography>

            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.BLACK}
              >
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Get Started"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWorkManag.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>

        <ContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>

          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
              Work together
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.BLACK}
              >
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Try it now"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
        </ContainerSC>
      </WrapperSC>
    </WhiteContainerSC>
  );
};
