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
    advantage1: "Sync unlimited devices",
    advantage2: "10 GB monthly uploads",
    advantage3: "200 MB max. note size",
    advantage4: "Customize Home dashboard and access extra widgets",
    advantage5: "Connect primary Google Calendar account",
    advantage6: " Add due dates, reminders, and notifications to your tasks",
    icon: PointIcon.src,
  },
  {
    set: "Personal",
    price: "$11.99",
    description: "Capture ideas and find them quickly",
    advantage1: "Sync unlimited devices",
    advantage2: "10 GB monthly uploads",
    advantage3: "200 MB max. note size",
    advantage4: "Customize Home dashboard and access extra widgets",
    advantage5: "Connect primary Google Calendar account",
    advantage6: " Add due dates, reminders, and notifications to your tasks",
    icon: PointIcon.src,
  },
  {
    set: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    advantage1: "Sync unlimited devices",
    advantage2: "10 GB monthly uploads",
    advantage3: "200 MB max. note size",
    advantage4: "Customize Home dashboard and access extra widgets",
    advantage5: "Connect primary Google Calendar account",
    advantage6: " Add due dates, reminders, and notifications to your tasks",
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
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage1}
            </TabAdvantage>
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage2}
            </TabAdvantage>
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage3}
            </TabAdvantage>
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage4}
            </TabAdvantage>
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage5}
            </TabAdvantage>
            <TabAdvantage id="text">
              <Point src={tab.icon} id="point" />
              {tab.advantage6}
            </TabAdvantage>
            <TabButton id="button">Get Started</TabButton>
          </Tab>
        ))}
      </BlockTabs>
    </PricingContainer>
  );
};
