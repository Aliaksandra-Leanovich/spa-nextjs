import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ArrowImage,
  BlockWithButton,
  BlockWithLinks,
  BottomFooterContainer,
  BottomFooterDecription,
  CategoryFooter,
  CategoryFooterDescription,
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
            {category.subcategory.map((subcategory, index) => (
              <SmallCategoryFooter key={index}>
                {subcategory}
              </SmallCategoryFooter>
            ))}
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
            <CategoryFooterDescription>English</CategoryFooterDescription>
            <ArrowImage src={Arrow.src} alt="arrow" />
          </EnglishContainer>

          <CategoryFooterDescription>
            Tearms &amp; privacy
          </CategoryFooterDescription>
          <CategoryFooterDescription>Security</CategoryFooterDescription>
          <CategoryFooterDescription>Status</CategoryFooterDescription>
          <CategoryFooterDescription>
            ©2021 Whitepace LLC.
          </CategoryFooterDescription>
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
