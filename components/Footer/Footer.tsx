import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ArrowImageSC,
  BlockWithButtonSC,
  BlockWithLinksSC,
  BottomFooterContainerSC,
  BottomFooterDecriptionSC,
  ContainerFooterSC,
  EnglishContainerSC,
  LogoContainerSC,
  SocialMediaContainerSC,
  SocialMediaImageSC,
  StyledFooterSC,
  WorldImageSC,
} from "./style";
import Logo from "/public/icons/logo.svg";
import Arrow from "/public/icons/arrow.svg";
import World from "/public/icons/world.svg";
import Twitter from "/public/icons/Twitter.svg";
import Linkedin from "/public/icons/Linkedin.svg";
import Facebook from "/public/icons/Facebook.svg";
import {
  H5,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXS,
} from "../../ui/typography";
import { Colors } from "../../ui/colors";
import { TextContainerSC } from "../Sections/styles";

const config = [
  {
    category: "Product",
    subcategories: ["Overview", "Pricing", "Customer Stories"],
  },
  {
    category: "Resources",
    subcategories: ["Blog", "Guides tutorials", "Help center"],
  },
  {
    category: "Company",
    subcategories: ["About us", "Careers", "Media kit"],
  },
];

export const Footer = () => (
  <StyledFooterSC>
    <ContainerFooterSC>
      <BlockWithLinksSC>
        <LogoContainerSC src={Logo.src} alt="logo" />
        <TextContainerSC margin="15px 0 0 0">
          <ParagraphMedium color={Colors.WHITE}>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </ParagraphMedium>
        </TextContainerSC>
      </BlockWithLinksSC>
      {config.map((category, index) => (
        <BlockWithLinksSC key={index}>
          <ParagraphSmall weight="700" color={Colors.WHITE}>
            {category.category}
          </ParagraphSmall>
          {category.subcategories.map((subcategory, index) => (
            <ParagraphXS
              color={Colors.WHITE}
              key={index}
              hoverColor={Colors.YELLOW}
            >
              {subcategory}
            </ParagraphXS>
          ))}
        </BlockWithLinksSC>
      ))}
      <BlockWithButtonSC>
        <H5 color={Colors.WHITE}>Try It Today</H5>
        <TextContainerSC margin="24px 0">
          <ParagraphXS color={Colors.WHITE}>
            Get started for free. Add your whole team as your needs grow.
          </ParagraphXS>
        </TextContainerSC>
        <LinkTemplate href="/whitepace" text="Start today" />
      </BlockWithButtonSC>
    </ContainerFooterSC>
    <BottomFooterContainerSC>
      <BottomFooterDecriptionSC>
        <EnglishContainerSC>
          <WorldImageSC src={World.src} alt="world" />
          <ParagraphXS color={Colors.WHITE}>English</ParagraphXS>
          <ArrowImageSC src={Arrow.src} alt="arrow" />
        </EnglishContainerSC>
        <TextContainerSC margin="0 60px 0 0" tabletMargin=" 0 0 20px 0">
          <ParagraphXS color={Colors.WHITE}>Tearms &amp; privacy</ParagraphXS>
        </TextContainerSC>

        <TextContainerSC margin="0 60px 0 0" tabletMargin="0 0 20px 0">
          <ParagraphXS color={Colors.WHITE}>Security</ParagraphXS>
        </TextContainerSC>

        <TextContainerSC margin="0 60px 0 0" tabletMargin="0 0 20px 0">
          <ParagraphXS color={Colors.WHITE}>Status</ParagraphXS>
        </TextContainerSC>

        <ParagraphXS color={Colors.WHITE}>©2021 Whitepace LLC.</ParagraphXS>
      </BottomFooterDecriptionSC>
      <SocialMediaContainerSC>
        <SocialMediaImageSC src={Facebook.src} alt="Facebook" />
        <SocialMediaImageSC src={Twitter.src} alt="twitter" />
        <SocialMediaImageSC src={Linkedin.src} alt="Linkedin" />
      </SocialMediaContainerSC>
    </BottomFooterContainerSC>
  </StyledFooterSC>
);
