import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ArrowImage,
  BlockWithButton,
  BlockWithLinks,
  BottomFooterContainer,
  BottomFooterDecription,
  CategoryFooter,
  ContainerFooter,
  DecriptionFooter,
  EnglishContainer,
  LogoContainer,
  SmallCategoryFooter,
  SocialMediaContainer,
  SocialMediaImage,
  StyledFooter,
  TitleFooter,
  WorldImage,
} from "./style";
import Logo from "/public/logo.svg";
import Arrow from "/public/icons/arrow.svg";
import World from "/public/icons/world.svg";
import Twitter from "/public/icons/Twitter.svg";
import Linkedin from "/public/icons/Linkedin.svg";
import Facebook from "/public/icons/Facebook.svg";

const config = [
  {
    category: "Product",
    subcategory1: "Overview",
    subcategory2: "Pricing",
    subcategory3: "Customer Stories",
  },
  {
    category: "Resources",
    subcategory1: "Blog",
    subcategory2: "Guides tutorials",
    subcategory3: "Help center",
  },
  {
    category: "Company",
    subcategory1: "About us",
    subcategory2: "Careers",
    subcategory3: "Media kit",
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <ContainerFooter>
        <BlockWithLinks>
          <LogoContainer src={Logo.src} alt="logo" />
          <DecriptionFooter>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </DecriptionFooter>
        </BlockWithLinks>
        {config.map((category, index) => (
          <BlockWithLinks key={index}>
            <CategoryFooter>{category.category}</CategoryFooter>
            <SmallCategoryFooter>{category.subcategory1}</SmallCategoryFooter>
            <SmallCategoryFooter>{category.subcategory2}</SmallCategoryFooter>
            <SmallCategoryFooter>{category.subcategory3}</SmallCategoryFooter>
          </BlockWithLinks>
        ))}
        <BlockWithButton>
          <TitleFooter>Try It Today</TitleFooter>
          <SmallCategoryFooter>
            Get started for free. Add your whole team as your needs grow.
          </SmallCategoryFooter>
          <LinkTemplate href="/whitepace" text="Start today" />
        </BlockWithButton>
      </ContainerFooter>
      <BottomFooterContainer>
        <BottomFooterDecription>
          <EnglishContainer>
            <WorldImage src={World.src} alt="world" />
            <SmallCategoryFooter>English</SmallCategoryFooter>
            <ArrowImage src={Arrow.src} alt="arrow" />
          </EnglishContainer>

          <SmallCategoryFooter>Tearms &amp; privacy</SmallCategoryFooter>
          <SmallCategoryFooter>Security</SmallCategoryFooter>
          <SmallCategoryFooter>Status</SmallCategoryFooter>
          <SmallCategoryFooter>©2021 Whitepace LLC.</SmallCategoryFooter>
        </BottomFooterDecription>
        <SocialMediaContainer>
          <SocialMediaImage src={Facebook.src} alt="Facebook" />
          <SocialMediaImage src={Twitter.src} alt="twitter" />
          <SocialMediaImage src={Linkedin.src} alt="Linkedin" />
        </SocialMediaContainer>
      </BottomFooterContainer>
    </StyledFooter>
  );
};
