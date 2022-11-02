import { LinkVariants, VariantsTypography } from "../../enums";
import { ImageWorkSecond } from "../../public/icons";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WhiteContainerSC,
  WrapperSC,
} from "./styles";

export const CustomiseSection = () => {
  return (
    <WhiteContainerSC>
      <WrapperSC>
        <ContainerSC id="resources">
          <ImageContainerSC>
            <ImageSC src={ImageWorkSecond.src} alt={"work together"} />
          </ImageContainerSC>
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h1} color={Colors.BLACK}>
              Customise it to your needs
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.BLACK}
              >
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Lets Go"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
        </ContainerSC>
      </WrapperSC>
    </WhiteContainerSC>
  );
};
