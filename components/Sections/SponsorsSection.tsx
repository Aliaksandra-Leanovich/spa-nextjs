import { VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import {
  ClientsContainer,
  SponsorsContainerSC,
  SponsorsImageSC,
  WhiteContainerSC,
  WrapperSC,
} from "./styles";
import ImageApple from "/public/icons/Apple.svg";
import ImageGoogle from "/public/icons/Google.svg";
import ImageMicrosoft from "/public/icons/Microsoft.svg";
import ImageSlack from "/public/icons/Slack.svg";

export const SponsorsSection = () => {
  return (
    <WhiteContainerSC>
      <WrapperSC>
        <ClientsContainer>
          <Typography variant={VariantsTypography.h1} color={Colors.BLACK}>
            Our sponsors
          </Typography>
          <SponsorsContainerSC>
            <SponsorsImageSC>
              <ImageApple />
            </SponsorsImageSC>
            <SponsorsImageSC>
              <ImageMicrosoft />
            </SponsorsImageSC>
            <SponsorsImageSC>
              <ImageSlack />
            </SponsorsImageSC>
            <SponsorsImageSC>
              <ImageGoogle />
            </SponsorsImageSC>
          </SponsorsContainerSC>
        </ClientsContainer>
      </WrapperSC>
    </WhiteContainerSC>
  );
};
