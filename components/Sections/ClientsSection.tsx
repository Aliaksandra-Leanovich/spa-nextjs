import { VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Slider } from "../Slider";
import {
  ClientsContainer,
  SliderContainerSC,
  TextContainerSliderSC,
  WrapperSC,
} from "./styles";
import Avatar1 from "/public/icons/avatar1.svg";
import Avatar2 from "/public/icons/avatar2.svg";
import Avatar3 from "/public/icons/avatar3.svg";
import QuotesImage from "/public/icons/Quote.svg";

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
