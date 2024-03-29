import { default as NextLink } from "next/link";
import { LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Link } from "../Link";
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
  SocialMediaImageSC,
  StyledFooterSC,
  SubcategorydLinkSC,
  TextContainerButtonSC,
  TextContainerFooterSC,
  WorldImageSC,
  WrapperSC,
} from "./style";
import { IFooterData } from "./types";
import ArrowIcon from "/public/icons/arrow.png";
import FacebookIcon from "/public/icons/Facebook.svg";
import LinkedinIcon from "/public/icons/Linkedin.svg";
import Logo from "/public/icons/logo.svg";
import TwitterIcon from "/public/icons/Twitter.svg";
import WorldIcon from "/public/icons/world.svg";

const config: IFooterData[] = [
  {
    category: "Product",
    link: "#",
    subcategories: [
      { name: "Overview", link: "#" },
      { name: "Pricing", link: "#" },
      { name: "Customer Stories", link: "#" },
    ],
  },
  {
    category: "Resources",
    link: "#",
    subcategories: [
      { name: "Blog", link: "#" },
      { name: "Guides tutorials", link: "#" },
      { name: "Help center", link: "#" },
    ],
  },
  {
    category: "Company",
    link: "#",
    subcategories: [
      { name: "About us", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Media kit", link: "#" },
    ],
  },
];

export const Footer = () => (
  <StyledFooterSC>
    <WrapperSC>
      <ContainerFooterSC>
        <BlockWithLinksSC>
          <LogoContainerSC>
            <Logo />
          </LogoContainerSC>

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
            <NextLink href={category.link} key={index}>
              <CategoryLinkSC>{category.category}</CategoryLinkSC>
            </NextLink>
            {category.subcategories.map((subcategory, index) => (
              <NextLink href={subcategory.link} key={index}>
                <SubcategorydLinkSC>{subcategory.name}</SubcategorydLinkSC>
              </NextLink>
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
          <Link
            href="/whitepace"
            text="Start today"
            variant={LinkVariants.linkLarge}
          />
        </BlockWithButtonSC>
      </ContainerFooterSC>
      <BottomFooterContainerSC>
        <BottomFooterDecriptionSC>
          <EnglishContainerSC>
            <WorldImageSC>
              <WorldIcon />
            </WorldImageSC>
            <Typography
              color={Colors.WHITE}
              variant={VariantsTypography.paragraphXS}
            >
              English
            </Typography>
            <ArrowImageSC>
              <img src={ArrowIcon.src} alt="" />
            </ArrowImageSC>
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
        <SocialMediaContainerSC>
          <SocialMediaImageSC>
            <FacebookIcon />
          </SocialMediaImageSC>
          <SocialMediaImageSC>
            <TwitterIcon />
          </SocialMediaImageSC>

          <SocialMediaImageSC>
            <LinkedinIcon />
          </SocialMediaImageSC>
        </SocialMediaContainerSC>
      </BottomFooterContainerSC>
    </WrapperSC>
  </StyledFooterSC>
);
