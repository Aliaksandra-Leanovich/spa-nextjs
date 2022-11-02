import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import { UnderlinedTitle } from "../Underline";
import {
  BackgroundImageContainerManagSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WhiteContainerSC,
  WrapperSC,
} from "./styles";
import BackgroundImageManagment from "/public/icons/managmentbackground.svg";
import ImageWorkFifth from "/public/icons/team-work3.png";
import underlineIcon from "/public/icons/underline.png";
import ImageWorkFourth from "/public/icons/worktogether.jpg";

export const ManagementSection = () => {
  return (
    <WhiteContainerSC>
      <BackgroundImageContainerManagSC>
        <BackgroundImageManagment />
      </BackgroundImageContainerManagSC>
      <WrapperSC>
        <ContainerSC id="products">
          <DescriptionContainerSC>
            <UnderlinedTitle
              img={underlineIcon.src}
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
            <ImageSC src={ImageWorkFifth.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>

        <ContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWorkFourth.src} alt={"work together"} />
          </ImageContainerSC>

          <DescriptionContainerSC>
            <UnderlinedTitle
              img={underlineIcon.src}
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
