import { LinkVariants, VariantsTypography } from "../../enums";
import { AndroidIcon, AppleIcon, WindowIcon } from "../../public/icons";
import { Typography } from "../../ui";
import { Colors } from "../../ui/colors";
import { Link } from "../Link";
import {
  AppImageSC,
  AppsContainerSC,
  BlueContainerSC,
  FreeTrialContainerSC,
  FreeTrialTitleSC,
  TextContainerFreeTrialSC,
  TextContainerFreeTrialSecondSC,
  WrapperSC,
} from "./styles";

export const FreeTrialSection = () => {
  return (
    <BlueContainerSC>
      <WrapperSC>
        <FreeTrialContainerSC>
          <FreeTrialTitleSC variant={VariantsTypography.h1}>
            Try Whitepace <span>today</span>
          </FreeTrialTitleSC>

          <TextContainerFreeTrialSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Get started for free.
            </Typography>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Add your whole team as your needs grow.
            </Typography>
          </TextContainerFreeTrialSC>

          <Link
            href="/whitepace"
            text="Try Taskey free"
            variant={LinkVariants.linkLarge}
          />
          <TextContainerFreeTrialSecondSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              On a big team? Contact sales
            </Typography>
          </TextContainerFreeTrialSecondSC>

          <AppsContainerSC>
            <AppImageSC>
              <AppleIcon />
            </AppImageSC>
            <AppImageSC>
              <WindowIcon />
            </AppImageSC>
            <AppImageSC>
              <AndroidIcon />
            </AppImageSC>
          </AppsContainerSC>
        </FreeTrialContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
