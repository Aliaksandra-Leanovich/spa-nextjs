import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import { DataImage } from "../../public/icons";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WhiteContainerSC,
  WrapperSC,
} from "./styles";

export const YourDataSection = () => {
  return (
    <WhiteContainerSC>
      <WrapperSC>
        <ContainerSC>
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h1} color={Colors.BLACK}>
              100% your data
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.BLACK}
              >
                The app is open source and your notes are saved to an open
                format, so you will always have access to them. Uses End-To-End
                Encryption (E2EE) to secure your notes and ensure no-one but
                yourself can access them.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Read more"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>

          <ImageContainerSC>
            <ImageSC src={DataImage.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </WhiteContainerSC>
  );
};
