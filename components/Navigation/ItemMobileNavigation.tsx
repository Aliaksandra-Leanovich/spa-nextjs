import Link from "next/link";
import { useState } from "react";
import { VariantsTypography } from "../../enums";
import { Typography } from "../../ui";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigationMobile,
} from "./styles";
import { ILink } from "./types";

export const ItemMobileNavigation = ({ link }: ILink) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <LinkSC onClick={link.subcategories && handleClick}>
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
