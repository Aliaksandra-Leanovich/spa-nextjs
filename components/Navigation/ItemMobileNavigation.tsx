import Link from "next/link";
import React, { useState } from "react";
import { Typography, VariantsTypography } from "../../ui/typography";
import { ILinkNavigation } from "./Navigation";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigationMobile,
} from "./styles";

export interface ILinkItem {}

export interface ILinkSubcategories {
  name: string;
  link: string;
}

export const ItemMobileNavigation = ({
  subcategories,
  title,
  href,
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
    setSubnav(false);
  };

  return (
    <>
      <LinkSC onMouseLeave={handleMouseLeave}>
        <Link href={href}>
          <HoverLinkSC onMouseEnter={subcategories && handleMouseEnter}>
            <Typography variant={VariantsTypography.subtitle}>
              {title}
            </Typography>
            {subcategories ? iconOpen : null}
          </HoverLinkSC>
        </Link>
        {subnav && (
          <SubNavigationMobile open={open}>
            {subcategories?.map((item: ILinkSubcategories, index: number) => (
              <Link href={item.link} key={index}>
                <SubcategorydLinkSC>{item.name}</SubcategorydLinkSC>
              </Link>
            ))}
          </SubNavigationMobile>
        )}
      </LinkSC>
    </>
  );
};
