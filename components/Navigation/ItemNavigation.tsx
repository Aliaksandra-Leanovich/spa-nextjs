import Link from "next/link";
import React, { useState } from "react";
import { Typography, VariantsTypography } from "../../ui/typography";

import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigation,
} from "./styles";
import { ILink, ILinkSubcategories } from "./types";

export const ItemNavigation = ({ link }: ILink) => {
  const [open, isOpen] = useState(false);

  const handleMouseEnter = () => {
    isOpen(true);
  };
  const handleMouseLeave = () => {
    isOpen(false);
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
        {open && (
          <SubNavigation open={open}>
            {link.subcategories?.map(
              (item: ILinkSubcategories, index: number) => (
                <Link href={item.link} key={index}>
                  <SubcategorydLinkSC>{item.name}</SubcategorydLinkSC>
                </Link>
              )
            )}
          </SubNavigation>
        )}
      </LinkSC>
    </>
  );
};
