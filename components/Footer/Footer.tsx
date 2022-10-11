import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ArrowImage,
  BlockWithButton,
  BlockWithLinks,
  BottomFooterContainer,
  BottomFooterDecription,
  ContainerFooter,
  EnglishContainer,
  LogoContainer,
  SocialMediaContainer,
  SocialMediaImage,
  StyledFooter,
  WorldImage,
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
import { TextContainer } from "../Sections/styles";

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
          <TextContainer margin="15 px 0 0 0">
            <ParagraphMedium color={Colors.WHITE}>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </ParagraphMedium>
          </TextContainer>
        </BlockWithLinks>
        {config.map((category, index) => (
          <BlockWithLinks key={index}>
            <ParagraphSmall weight="700" color={Colors.WHITE}>
              {category.category}
            </ParagraphSmall>
            {category.subcategory.map((subcategory, index) => (
              <ParagraphXS color={Colors.WHITE} key={index}>
                {subcategory}
              </ParagraphXS>
            ))}
          </BlockWithLinks>
        ))}
        <BlockWithButton>
          <H5 color={Colors.WHITE}>Try It Today</H5>
          <TextContainer></TextContainer>
          <ParagraphXS color={Colors.WHITE} margin="24px 0">
            Get started for free. Add your whole team as your needs grow.
          </ParagraphXS>
          <LinkTemplate href="/whitepace" text="Start today" />
        </BlockWithButton>
      </ContainerFooter>
      <BottomFooterContainer>
        <BottomFooterDecription>
          <EnglishContainer>
            <WorldImage src={World.src} alt="world" />
            <ParagraphXS color={Colors.WHITE}>English</ParagraphXS>
            <ArrowImage src={Arrow.src} alt="arrow" />
          </EnglishContainer>
          <TextContainer margin="0 60px 0 0" tabletMargin=" 0 0 20px 0">
            <ParagraphXS color={Colors.WHITE}>Tearms &amp; privacy</ParagraphXS>
          </TextContainer>

          <TextContainer margin="0 60px 0 0" tabletMargin="0 0 20px 0">
            <ParagraphXS color={Colors.WHITE}>Security</ParagraphXS>
          </TextContainer>

          <TextContainer margin="0 60px 0 0" tabletMargin="0 0 20px 0">
            <ParagraphXS color={Colors.WHITE}>Status</ParagraphXS>
          </TextContainer>

          <ParagraphXS color={Colors.WHITE}>©2021 Whitepace LLC.</ParagraphXS>
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
