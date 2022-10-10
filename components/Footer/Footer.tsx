import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import Logo from "/public/logo.svg";
import Arrow from "/public/icons/arrow.svg";
import World from "/public/icons/world.svg";
import Twitter from "/public/icons/Twitter.svg";
import Linkedin from "/public/icons/Linkedin.svg";
import Facebook from "/public/icons/Facebook.svg";
import {
  ArrowImageSC,
  BlockWithButtonSC,
  BlockWithLinksSC,
  BottomFooterContainerSC,
  BottomFooterDecriptionSC,
  CategoryFooterDescriptionSC,
  CategoryFooterSC,
  ContainerFooterSC,
  DecriptionFooterSC,
  EnglishContainerSC,
  LogoContainerSC,
  SmallCategoryFooterSC,
  SocialMediaContainerSC,
  SocialMediaImageSC,
  StyledFooterSC,
  TitleFooterSC,
  WorldImageSC,
} from "./style";

const config = [
  {
    category: "Product",
    subcategory: ["Overview", "Pricing", "Customer Stories"],
  },
  {
    category: "Resources",
    subcategory: ["Blog", "Guides tutorials", "Help center"],
  },
  {
    category: "Company",
    subcategory: ["About us", "Careers", "Media kit"],
  },
];

export const Footer = () => {
  return (
    <StyledFooterSC>
      <ContainerFooterSC>
        <BlockWithLinksSC>
          <LogoContainerSC src={Logo.src} alt="logo" />
          <DecriptionFooterSC>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </DecriptionFooterSC>
        </BlockWithLinksSC>
        {config.map((category, index) => (
          <BlockWithLinksSC key={index}>
            <CategoryFooterSC>{category.category}</CategoryFooterSC>
            {category.subcategory.map((subcategory, index) => (
              <SmallCategoryFooterSC key={index}>
                {subcategory}
              </SmallCategoryFooterSC>
            ))}
          </BlockWithLinksSC>
        ))}
        <BlockWithButtonSC>
          <TitleFooterSC>Try It Today</TitleFooterSC>
          <SmallCategoryFooterSC>
            Get started for free. Add your whole team as your needs grow.
          </SmallCategoryFooterSC>
          <LinkTemplate href="/whitepace" text="Start today" />
        </BlockWithButtonSC>
      </ContainerFooterSC>
      <BottomFooterContainerSC>
        <BottomFooterDecriptionSC>
          <EnglishContainerSC>
            <WorldImageSC src={World.src} alt="world" />
            <CategoryFooterDescriptionSC>English</CategoryFooterDescriptionSC>
            <ArrowImageSC src={Arrow.src} alt="arrow" />
          </EnglishContainerSC>

          <CategoryFooterDescriptionSC>
            Tearms &amp; privacy
          </CategoryFooterDescriptionSC>
          <CategoryFooterDescriptionSC>Security</CategoryFooterDescriptionSC>
          <CategoryFooterDescriptionSC>Status</CategoryFooterDescriptionSC>
          <CategoryFooterDescriptionSC>
            ©2021 Whitepace LLC.
          </CategoryFooterDescriptionSC>
        </BottomFooterDecriptionSC>
        <SocialMediaContainerSC>
          <SocialMediaImageSC src={Facebook.src} alt="Facebook" />
          <SocialMediaImageSC src={Twitter.src} alt="twitter" />
          <SocialMediaImageSC src={Linkedin.src} alt="Linkedin" />
        </SocialMediaContainerSC>
      </BottomFooterContainerSC>
    </StyledFooterSC>
  );
};
