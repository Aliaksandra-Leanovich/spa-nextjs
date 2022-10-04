import React from "react";
import {
  BlockDescription,
  BlockTabs,
  BlockTitle,
  PricingContainer,
  Tab,
  TabAdvantage,
  TabButton,
  TabDescr,
  TabPrice,
  TabSet,
} from "./styles";

export const PricingBlock = () => {
  return (
    <PricingContainer>
      <BlockTitle>Choose Your Plan</BlockTitle>
      <BlockDescription>
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </BlockDescription>
      <BlockTabs>
        <Tab>
          <TabSet> Free</TabSet>
          <TabPrice>$0</TabPrice>
          <TabDescr>Capture ideas and find them quickly</TabDescr>
          <TabAdvantage>Sync unlimited devices</TabAdvantage>
          <TabAdvantage>10 GB monthly uploads</TabAdvantage>
          <TabAdvantage>200 MB max. note size</TabAdvantage>
          <TabAdvantage>
            Customize Home dashboard and access extra widgets
          </TabAdvantage>
          <TabAdvantage>Connect primary Google Calendar account</TabAdvantage>
          <TabAdvantage>
            Add due dates, reminders, and notifications to your tasks
          </TabAdvantage>
          <TabButton>Get Started</TabButton>
        </Tab>
        <Tab>
          <TabSet> Peronal</TabSet>
          <TabPrice>$11.99</TabPrice>
          <TabDescr>Capture ideas and find them quickly</TabDescr>
          <TabAdvantage>Sync unlimited devices</TabAdvantage>
          <TabAdvantage>10 GB monthly uploads</TabAdvantage>
          <TabAdvantage>200 MB max. note size</TabAdvantage>
          <TabAdvantage>
            Customize Home dashboard and access extra widgets
          </TabAdvantage>
          <TabAdvantage>Connect primary Google Calendar account</TabAdvantage>
          <TabAdvantage>
            Add due dates, reminders, and notifications to your tasks
          </TabAdvantage>
          <TabButton>Get Started</TabButton>
        </Tab>
        <Tab>
          <TabSet> Organization</TabSet>
          <TabPrice>$49.99</TabPrice>
          <TabDescr>Capture ideas and find them quickly</TabDescr>
          <TabAdvantage>Sync unlimited devices</TabAdvantage>
          <TabAdvantage>10 GB monthly uploads</TabAdvantage>
          <TabAdvantage>200 MB max. note size</TabAdvantage>
          <TabAdvantage>
            Customize Home dashboard and access extra widgets
          </TabAdvantage>
          <TabAdvantage>Connect primary Google Calendar account</TabAdvantage>
          <TabAdvantage>
            Add due dates, reminders, and notifications to your tasks
          </TabAdvantage>
          <TabButton>Get Started</TabButton>
        </Tab>
      </BlockTabs>
    </PricingContainer>
  );
};
