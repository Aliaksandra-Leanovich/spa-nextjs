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
import { Typography } from "../../ui/Typography";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";
import UnderlinedTitle from "../Underline/Underline";
import underline from "/public/icons/underline.png";

export const ManagementSection = () => {
  return (
    <WhiteContainerSC>
      <BackgroundImageContainerManagSC>
        <Background />
      </BackgroundImageContainerManagSC>
      <WrapperSC>
        <ContainerSC id="products">
          <DescriptionContainerSC>
            <UnderlinedTitle
              img={underline.src}
              color={Colors.BLACK}
              css={{
                width: "70%",
                height: "30px",
                left: "0%",
                top: "82%",
                "@media (max-width: 768px)": {
                  left: "34%",
                },
                "@media (max-width: 541px)": {
                  width: "90%",
                  left: "8%",
                  top: "82%",
                },
              }}
            >
              Project Management
            </UnderlinedTitle>

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
            <UnderlinedTitle
              img={underline.src}
              color={Colors.BLACK}
              css={{
                width: "60%",
                height: "28px",
                left: "42%",
                top: "66%",
                "@media (max-width: 1037px ) ": {
                  left: "0%",
                  top: "86%",
                },
                "@media (max-width: 768px)": {
                  left: "42%",
                  top: "66%",
                },
                "@media (max-width: 382px) ": {
                  left: "28%",
                  top: "86%",
                },
                "@media (max-width: 365px)": {
                  left: "42%",
                  top: "66%",
                },
                "@media (max-width: 265px)": {
                  left: "28%",
                  top: "76%",
                },
              }}
            >
              Work together
            </UnderlinedTitle>
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
