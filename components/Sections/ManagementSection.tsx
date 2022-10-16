import React from "react";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/worktogether.svg";
import ImageWorkManag from "/public/icons/team-work4.webp";
import managBackground from "/public/icons/managmentbackground.svg";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  BackgroundImageContainerManagSC,
  BackgroundImageSC,
  TextContainerSC,
  WhiteContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const ManagementSection = () => {
  return (
    <WhiteContainerSC>
      <BackgroundImageContainerManagSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerManagSC>

      <ContainerSC id="products">
        <DescriptionContainerSC>
          <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
            Project Management
          </TypographySC>
          <TextContainerSC>
            <TypographySC
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </TypographySC>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Get Started"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWorkManag.src} alt={"work together"} />
      </ContainerSC>

      <ContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />

        <DescriptionContainerSC>
          <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
            Work together
          </TypographySC>
          <TextContainerSC>
            <TypographySC
              variant={VariantsTypography.paragraphSmall}
              color={Colors.BLACK}
            >
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </TypographySC>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Try it now"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
      </ContainerSC>
    </WhiteContainerSC>
  );
};
