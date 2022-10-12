import React from "react";
import PointIcon from "/public/icons/Point.svg";
import {
  BlockTabsSC,
  PointSC,
  PricingContainerSC,
  TabAdvantagesSC,
  TabButtonSC,
  TabSC,
  TextContainerSC,
} from "./styles";
import {
  H2,
  H3,
  ParagraphMedium,
  ParagraphXS,
  Subtitle,
} from "../../ui/typography";
import { Colors } from "../../ui/colors";

const config = [
  {
    set: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    advantages: [
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
    advantages: [
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
    advantages: [
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
    <PricingContainerSC id="pricing">
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
      <BlockTabsSC>
        {config.map((tab, index) => (
          <TabSC key={index}>
            <TextContainerSC>
              <ParagraphMedium color={Colors.BLACK} weight="600">
                {tab.set}
              </ParagraphMedium>
            </TextContainerSC>
            <TextContainerSC>
              <H3 color={Colors.BLACK} id="price">
                {tab.price}
              </H3>
            </TextContainerSC>

            <TextContainerSC>
              <ParagraphMedium color={Colors.BLACK} id="text">
                {tab.description}
              </ParagraphMedium>
            </TextContainerSC>

            <TabAdvantagesSC>
              {tab.advantages.map((advantage, index) => (
                <TextContainerSC key={index}>
                  <ParagraphXS color={Colors.BLACK} id="text">
                    <PointSC src={tab.icon} id="point" />
                    {advantage}
                  </ParagraphXS>
                </TextContainerSC>
              ))}
            </TabAdvantagesSC>

            <TabButtonSC id="button">Get Started</TabButtonSC>
          </TabSC>
        ))}
      </BlockTabsSC>
    </PricingContainerSC>
  );
};
