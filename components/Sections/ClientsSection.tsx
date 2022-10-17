import React from "react";
import { Colors } from "../../ui/colors";
import { Slider } from "../Slider/Slider";
import quotesImage from "/public/icons/Quote.svg";
import Avatar1 from "/public/icons/avatar1.svg";
import Avatar2 from "/public/icons/avatar2.svg";
import Avatar3 from "/public/icons/avatar3.svg";
import { Typography, VariantsTypography } from "../../ui/typography";
import {
  ClientsContainer,
  TextContainerSliderSC,
  WhiteContainerSC,
} from "./styles";

export interface IReviewers {
  comment: string;
  icon: string;
  avatar: string;
  name: string;
  position: string;
}

const reviewersData = [
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar1.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar2.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar3.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
];

export const ClientsSection = () => {
  return (
    <WhiteContainerSC>
      <ClientsContainer>
        <TextContainerSliderSC>
          <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
            What Our Clients Says
          </Typography>
        </TextContainerSliderSC>

        <Slider data={reviewersData} />
      </ClientsContainer>
    </WhiteContainerSC>
  );
};
