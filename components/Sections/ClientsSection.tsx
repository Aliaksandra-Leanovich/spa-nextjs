import React from "react";
import { Colors } from "../../ui/colors";
import { H2 } from "../../ui/typography";
import { Slider } from "../Slider/Slider";
import quotesImage from "/public/icons/Quote.svg";
import Avatar1 from "/public/icons/avatar1.svg";
import Avatar2 from "/public/icons/avatar2.svg";
import Avatar3 from "/public/icons/avatar3.svg";

import { ClientsContainer, SectionContainerSC } from "./styles";

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
  const reviewers: IReviewers[] = reviewersData.map((reviewer) => ({
    comment: reviewer.comment,
    icon: reviewer.icon,
    avatar: reviewer.avatar,
    name: reviewer.name,
    position: reviewer.position,
  }));
  return (
    <SectionContainerSC
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ClientsContainer>
        <H2 color={Colors.BLACK}>What Our Clients Says</H2>
        <Slider data={reviewers} />
      </ClientsContainer>
    </SectionContainerSC>
  );
};
