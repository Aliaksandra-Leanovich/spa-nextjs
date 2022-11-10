import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  MainBackgrounSC,
  MainContainerSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import backgroundImage from "/public/icons/mainbackground.png";
import ImageWork from "/public/icons/team-work1.png";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <MainBackgrounSC src={backgroundImage.src} />
      <WrapperSC>
        <ContainerSC>
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h1} color={Colors.WHITE}>
              Get More Done with whitepace
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Try Whitepace free"
              variant={LinkVariants.linkSmall}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </MainContainerSC>
  );
};
