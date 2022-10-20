import Link from "next/link";
import React, { useState } from "react";
import { Typography, VariantsTypography } from "../../ui/typography";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigationMobile,
} from "./styles";
import { ILink, ILinkSubcategories } from "./types";

export const ItemMobileNavigation = ({ link }: ILink) => {
  const [subnav, setSubnav] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setSubnav(true);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
    setSubnav(false);
  };

  return (
    <>
      <LinkSC onMouseLeave={handleMouseLeave}>
        <Link href={link.href}>
          <HoverLinkSC onMouseEnter={link.subcategories && handleMouseEnter}>
            <Typography variant={VariantsTypography.subtitle}>
              {link.title}
            </Typography>
            {link.subcategories ? link.iconOpen : null}
          </HoverLinkSC>
        </Link>
        {subnav && (
          <SubNavigationMobile open={open}>
            {link.subcategories?.map(
              (item: ILinkSubcategories, index: number) => (
                <Link href={item.link} key={index}>
                  <SubcategorydLinkSC>{item.name}</SubcategorydLinkSC>
                </Link>
              )
            )}
          </SubNavigationMobile>
        )}
      </LinkSC>
    </>
  );
};
