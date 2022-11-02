import { VariantsTypography } from "../../enums";
import {
  ImageApple,
  ImageGoogle,
  ImageMicrosoft,
  ImageSlack,
} from "../../public/icons";
import { Colors, Typography } from "../../ui";
import {
  ClientsContainer,
  SponsorsContainerSC,
  SponsorsImageSC,
  WhiteContainerSC,
  WrapperSC,
} from "./styles";

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
