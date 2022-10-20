import React from "react";
import PointIcon from "/public/icons/Point.svg";
import {
  BlockTabsSC,
  Border,
  ContainerSliderSC,
  PointSC,
  PricingContainerSC,
  TabAdvantagesSC,
  TabButtonSC,
  TabSC,
  TabTextContainerSC,
  TextContainerDescriptionSC,
  TextContainerSC,
  TextContainerTitleSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { SliderPricing } from "../SliderPricing/SliderPricing";
import { Typography, VariantsTypography } from "../../ui/typography";

export interface IPricePlans {
  set: string;
  price: string;
  description: string;
  advantages: string[];
  icon: string;
}

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
  },
];

export const PricingBlock = () => {
  return (
    <PricingContainerSC id="pricing">
      <TextContainerTitleSC>
        <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
          Choose Your Plan
        </Typography>
      </TextContainerTitleSC>
      <TextContainerDescriptionSC>
        <Typography
          variant={VariantsTypography.paragraphMedium}
          color={Colors.BLACK}
        >
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </Typography>
      </TextContainerDescriptionSC>

      <BlockTabsSC>
        {config.map((tab, index) => (
          <TabSC key={index}>
            <Border />
            <TabTextContainerSC>
              <TextContainerSC>
                <Typography
                  variant={VariantsTypography.paragraphMedium}
                  color={Colors.BLACK}
                >
                  {tab.set}
                </Typography>
              </TextContainerSC>
              <TextContainerSC>
                <Typography
                  variant={VariantsTypography.h3}
                  color={Colors.BLACK}
                >
                  {tab.price}
                </Typography>
              </TextContainerSC>

              <TextContainerSC>
                <Typography
                  variant={VariantsTypography.paragraphMedium}
                  color={Colors.BLACK}
                >
                  {tab.description}
                </Typography>
              </TextContainerSC>

              <TabAdvantagesSC>
                {tab.advantages.map((advantage, index) => (
                  <TextContainerSC key={index}>
                    <Typography
                      variant={VariantsTypography.paragraphXS}
                      color={Colors.BLACK}
                    >
                      <PointSC>
                        <PointIcon />
                      </PointSC>
                      {advantage}
                    </Typography>
                  </TextContainerSC>
                ))}
              </TabAdvantagesSC>

              <TabButtonSC>
                <Typography
                  variant={VariantsTypography.button}
                  color={Colors.BLACK}
                >
                  Get Started
                </Typography>
              </TabButtonSC>
            </TabTextContainerSC>
          </TabSC>
        ))}
      </BlockTabsSC>
      <ContainerSliderSC>
        <SliderPricing data={config} />
      </ContainerSliderSC>
    </PricingContainerSC>
  );
};
