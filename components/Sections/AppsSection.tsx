import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import {
  BackgroundImageAppsSC,
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import ImageApps from "/public/icons/Apps.png";
import favoriteBackground from "/public/icons/favoriteBackground.png";

export const AppsSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageAppsSC src={favoriteBackground.src} />
      <WrapperSC>
        <ContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageApps.src} alt={"work together"} />
          </ImageContainerSC>
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h1} color={Colors.WHITE}>
              Work with Your Favorite Apps Using whitepace
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Whitepace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to have all the tools you need for
                your project success.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Read more"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
        </ContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
