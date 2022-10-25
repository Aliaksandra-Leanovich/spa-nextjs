import Link from "next/link";
import React, { useState } from "react";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Typography } from "../../ui/typography";
import { ILinkNavigation } from "./Navigation";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigation,
} from "./styles";

export interface ILinkItem {}

export interface ILinkSubcategories {
  name: string;
  link: string;
}

export const ItemNavigation = ({
  subcategories,
  title,
  href,
  iconClose,
  iconOpen,
}: ILinkNavigation) => {
  const [subnav, setSubnav] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setSubnav(!subnav);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <LinkSC onMouseLeave={handleMouseLeave}>
        <Link href={href}>
          <HoverLinkSC onMouseEnter={subcategories && handleMouseEnter}>
            <Typography variant={VariantsTypography.subtitle}>
              {title}
            </Typography>
            {subcategories && subnav
              ? iconOpen
              : subcategories
              ? iconClose
              : null}
          </HoverLinkSC>
        </Link>
        {subnav && (
          <SubNavigation open={open}>
            {subcategories?.map((item: ILinkSubcategories, index: number) => (
              <Link href={item.link} key={index}>
                <SubcategorydLinkSC>{item.name}</SubcategorydLinkSC>
              </Link>
            ))}
          </SubNavigation>
        )}
      </LinkSC>
    </>
  );
};
