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
import { TypographySC, VariantsTypography } from "../../ui/typography";

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
      <TextContainerTitleSC>
        <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
          Choose Your Plan
        </TypographySC>
      </TextContainerTitleSC>
      <TextContainerDescriptionSC>
        <TypographySC
          variant={VariantsTypography.paragraphMedium}
          color={Colors.BLACK}
        >
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </TypographySC>
      </TextContainerDescriptionSC>

      <BlockTabsSC>
        {config.map((tab, index) => (
          <TabSC key={index}>
            <Border />
            <TabTextContainerSC>
              <TextContainerSC>
                <TypographySC
                  variant={VariantsTypography.h2}
                  color={Colors.BLACK}
                >
                  {tab.set}
                </TypographySC>
              </TextContainerSC>
              <TextContainerSC>
                <TypographySC
                  variant={VariantsTypography.h3}
                  color={Colors.BLACK}
                >
                  {tab.price}
                </TypographySC>
              </TextContainerSC>

              <TextContainerSC>
                <TypographySC
                  variant={VariantsTypography.paragraphMedium}
                  color={Colors.BLACK}
                >
                  {tab.description}
                </TypographySC>
              </TextContainerSC>

              <TabAdvantagesSC>
                {tab.advantages.map((advantage, index) => (
                  <TextContainerSC key={index}>
                    <TypographySC
                      variant={VariantsTypography.paragraphXS}
                      color={Colors.BLACK}
                    >
                      <PointSC src={tab.icon} />
                      {advantage}
                    </TypographySC>
                  </TextContainerSC>
                ))}
              </TabAdvantagesSC>

              <TabButtonSC>Get Started</TabButtonSC>
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
