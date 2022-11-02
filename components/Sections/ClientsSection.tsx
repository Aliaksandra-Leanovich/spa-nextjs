import { VariantsTypography } from "../../enums";
import { Avatar1, Avatar2, Avatar3, QuotesImage } from "../../public/icons";
import { Colors, Typography } from "../../ui";
import { Slider } from "../Slider";
import {
  ClientsContainer,
  SliderContainerSC,
  TextContainerSliderSC,
  WrapperSC,
} from "./styles";

export interface IReviewers {
  comment: string;
  icon: JSX.Element;
  avatar: JSX.Element;
  name: string;
  position: string;
}

const reviewersData = [
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: <QuotesImage />,
    avatar: <Avatar1 />,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: <QuotesImage />,
    avatar: <Avatar2 />,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: <QuotesImage />,
    avatar: <Avatar3 />,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
];

export const ClientsSection = () => {
  return (
    <SliderContainerSC>
      <WrapperSC>
        <ClientsContainer>
          <TextContainerSliderSC>
            <Typography variant={VariantsTypography.h1} color={Colors.BLACK}>
              What Our Clients Says
            </Typography>
          </TextContainerSliderSC>
          <Slider data={reviewersData} />
        </ClientsContainer>
      </WrapperSC>
    </SliderContainerSC>
  );
};
