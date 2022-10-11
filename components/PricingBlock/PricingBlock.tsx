import React from "react";
import PointIcon from "/public/icons/Point.svg";
import { BlockTabs, Point, PricingContainer, Tab, TabButton } from "./styles";
import {
  H2,
  H3,
  ParagraphMedium,
  ParagraphXS,
  Subtitle,
} from "../../ui/typography";
import { Colors } from "../../ui/colors";
import { TextContainer } from "../Sections/styles";

const config = [
  {
    set: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    advantage: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    icon: PointIcon.src,
  },
  {
    set: "Personal",
    price: "$11.99",
    description: "Capture ideas and find them quickly",
    advantage: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],

    icon: PointIcon.src,
  },
  {
    set: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    advantage: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    icon: PointIcon.src,
  },
];

export const PricingBlock = () => {
  return (
    <PricingContainer id="pricing">
      <H2 color={Colors.BLACK}>Choose Your Plan</H2>
      <Subtitle
        margin="0 0 120px 0 "
        laptop2Margin="0 0 114px 0"
        laptopMargin="0 0 138px 0"
        tabletMargin="0 0 85px 0"
      >
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </Subtitle>
      <BlockTabs>
        {config.map((tab, index) => (
          <Tab key={index}>
            <TextContainer margin="0 0 24px 0">
              <ParagraphMedium color={Colors.BLACK} weight="600">
                {tab.set}
              </ParagraphMedium>
            </TextContainer>
            <TextContainer margin="0 0 25px 0">
              <H3 color={Colors.BLACK} id="price">
                {tab.price}
              </H3>
            </TextContainer>

            <TextContainer margin="0 0 24px 0">
              <ParagraphMedium color={Colors.BLACK} id="text">
                {tab.description}
              </ParagraphMedium>
            </TextContainer>

            <>
              {tab.advantage.map((advantage, index) => (
                <TextContainer key={index} margin="0 0 28px 0">
                  <ParagraphXS color={Colors.BLACK} id="text">
                    <Point src={tab.icon} id="point" />
                    {advantage}
                  </ParagraphXS>
                </TextContainer>
              ))}
            </>

            <TabButton id="button">Get Started</TabButton>
          </Tab>
        ))}
      </BlockTabs>
    </PricingContainer>
  );
};
