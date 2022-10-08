import React from "react";
import PointIcon from "/public/icons/Point.svg";
import {
  BlockDescription,
  BlockTabs,
  BlockTitle,
  Point,
  PricingContainer,
  Tab,
  TabAdvantage,
  TabButton,
  TabDescr,
  TabPrice,
  TabSet,
} from "./styles";

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
      <BlockTitle>Choose Your Plan</BlockTitle>
      <BlockDescription>
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </BlockDescription>
      <BlockTabs>
        {config.map((tab, index) => (
          <Tab key={index}>
            <TabSet> {tab.set}</TabSet>
            <TabPrice id="price">{tab.price}</TabPrice>
            <TabDescr id="text">{tab.description}</TabDescr>
            <>
              {tab.advantage.map((advantage, index) => (
                <TabAdvantage id="text" key={index}>
                  <Point src={tab.icon} id="point" />
                  {advantage}
                </TabAdvantage>
              ))}
            </>

            <TabButton id="button">Get Started</TabButton>
          </Tab>
        ))}
      </BlockTabs>
    </PricingContainer>
  );
};
