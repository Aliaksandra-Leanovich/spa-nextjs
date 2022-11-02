import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import { UnderlinedTitle } from "../Underline";
import {
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import ImageWork from "/public/icons/team-work4.png";
import underlineIcon from "/public/icons/underline.png";

export const ExtensionSection = () => {
  return (
    <BlueContainerSC>
      <WrapperSC>
        <ContainerSC id="solutions">
          <DescriptionContainerSC>
            <UnderlinedTitle
              img={underlineIcon.src}
              color={Colors.WHITE}
              css={{
                width: "60%",
                height: "24px",
                left: "44%",
                top: "72%",
                "@media  (max-width: 1589px)": {
                  left: "0%",
                  top: "88%",
                },
                "@media (max-width: 1440px)": {
                  left: "44%",
                  top: "72%",
                },
                "@media (max-width: 1217px)": {
                  left: "0%",
                  top: "88%",
                },
                "@media (max-width: 529px)": {
                  left: "26%",
                  top: "88%",
                },
                "@media (max-width: 400px)": {
                  left: "10%",
                  top: "78%",
                },
              }}
            >
              Use as Extension
            </UnderlinedTitle>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Lets Go"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
