import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link/Link";
import {
  BackgroundImageContainerYourWorkSC,
  BlueContainerSC,
  ContainerYourWorkSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import YourWorkBackground from "/public/icons/everywhereBackground.svg";

export const YourWorkSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageContainerYourWorkSC>
        <YourWorkBackground />
      </BackgroundImageContainerYourWorkSC>
      <WrapperSC>
        <ContainerYourWorkSC>
          <Typography variant={VariantsTypography.h1} color={Colors.WHITE}>
            Your work, everywhere you are
          </Typography>
          <TextContainerSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </Typography>
          </TextContainerSC>

          <Link
            href="/whitepacefree"
            text="Try Taskey"
            variant={LinkVariants.linkLarge}
          />
        </ContainerYourWorkSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
