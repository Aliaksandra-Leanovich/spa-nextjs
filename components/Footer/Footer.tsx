import React from "react";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import {
  ArrowImageSC,
  BlockWithButtonSC,
  BlockWithLinksSC,
  BottomFooterContainerSC,
  BottomFooterDecriptionSC,
  CategoryLinkSC,
  ContainerFooterSC,
  EnglishContainerSC,
  LogoContainerSC,
  SocialMediaContainerSC,
  StyledFooterSC,
  SubcategorydLinkSC,
  TextContainerButtonSC,
  TextContainerFooterSC,
  WorldImageSC,
} from "./style";
import Logo from "/public/icons/logo.svg";
import Arrow from "/public/icons/arrow.svg";
import World from "/public/icons/world.svg";
import { Colors } from "../../ui/colors";
import Link from "next/link";
import { Typography, VariantsTypography } from "../../ui/typography";

const config = [
  {
    category: "Product",
    subcategories: [
      { name: "Overview", link: "#" },
      { name: "Pricing", link: "#" },
      { name: "Customer Stories", link: "#" },
    ],
  },
  {
    category: "Resources",
    subcategories: [
      { name: "Blog", link: "#" },
      { name: "Guides tutorials", link: "#" },
      { name: "Help center", link: "#" },
    ],
  },
  {
    category: "Company",
    subcategories: [
      { name: "About us", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Media kit", link: "#" },
    ],
  },
];

export const Footer = () => (
  <StyledFooterSC>
    <ContainerFooterSC>
      <BlockWithLinksSC>
        <LogoContainerSC src={Logo.src} alt="logo" />

        <Typography
          variant={VariantsTypography.paragraphSmall}
          color={Colors.WHITE}
        >
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </Typography>
      </BlockWithLinksSC>
      {config.map((category, index) => (
        <BlockWithLinksSC key={index}>
          <Link href="#" key={index}>
            <CategoryLinkSC>{category.category}</CategoryLinkSC>
          </Link>
          {category.subcategories.map((subcategory, index) => (
            <Link href={subcategory.link} key={index}>
              <SubcategorydLinkSC>{subcategory.name}</SubcategorydLinkSC>
            </Link>
          ))}
        </BlockWithLinksSC>
      ))}
      <BlockWithButtonSC>
        <Typography color={Colors.WHITE} variant={VariantsTypography.h5}>
          Try It Today
        </Typography>
        <TextContainerButtonSC>
          <Typography
            color={Colors.WHITE}
            variant={VariantsTypography.paragraphXS}
          >
            Get started for free. Add your whole team as your needs grow.
          </Typography>
        </TextContainerButtonSC>
        <LinkTemplate
          href="/whitepace"
          text="Start today"
          variant={LinkVariants.linkLarge}
        />
      </BlockWithButtonSC>
    </ContainerFooterSC>
    <BottomFooterContainerSC>
      <BottomFooterDecriptionSC>
        <EnglishContainerSC>
          <WorldImageSC src={World.src} alt="world" />
          <Typography
            color={Colors.WHITE}
            variant={VariantsTypography.paragraphXS}
          >
            English
          </Typography>
          <ArrowImageSC src={Arrow.src} alt="arrow" />
        </EnglishContainerSC>
        <TextContainerFooterSC>
          <Typography
            color={Colors.WHITE}
            variant={VariantsTypography.paragraphXS}
          >
            Tearms &amp; privacy
          </Typography>
        </TextContainerFooterSC>

        <TextContainerFooterSC>
          <Typography
            color={Colors.WHITE}
            variant={VariantsTypography.paragraphXS}
          >
            Security
          </Typography>
        </TextContainerFooterSC>

        <TextContainerFooterSC>
          <Typography
            color={Colors.WHITE}
            variant={VariantsTypography.paragraphXS}
          >
            Status
          </Typography>
        </TextContainerFooterSC>

        <Typography
          color={Colors.WHITE}
          variant={VariantsTypography.paragraphXS}
        >
          ©2021 Whitepace LLC.
        </Typography>
      </BottomFooterDecriptionSC>
      <SocialMediaContainerSC></SocialMediaContainerSC>
    </BottomFooterContainerSC>
  </StyledFooterSC>
);
