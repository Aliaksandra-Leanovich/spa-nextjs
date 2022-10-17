import Link from "next/link";
import React, { useState } from "react";
import { Typography, VariantsTypography } from "../../ui/typography";
import { ILinkNavigation } from "./Navigation";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigation,
} from "./styles";

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

  const showSubNav = () => setSubnav(!subnav);
  return (
    <>
      <LinkSC onMouseEnter={subcategories && showSubNav}>
        <Link href={href}>
          <HoverLinkSC>
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
          <SubNavigation>
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
