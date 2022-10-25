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
  const [isOpen, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <LinkSC
        onMouseLeave={link.subcategories && handleMouseLeave}
        onMouseEnter={link.subcategories && handleMouseEnter}
      >
        <Link href={link.href}>
          <HoverLinkSC>
            <Typography variant={VariantsTypography.subtitle}>
              {link.title}
            </Typography>
            {link.subcategories && link.iconOpen}
          </HoverLinkSC>
        </Link>
        {isOpen && (
          <SubNavigationMobile isOpen={isOpen}>
            {link.subcategories?.map((item, index) => (
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
