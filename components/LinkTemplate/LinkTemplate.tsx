import Link from "next/link";
import React from "react";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import { Arrow, LinkSC } from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";
import { ILink } from "./types";

export enum LinkVariants {
  linkSmall = "linkSmall",
  linkMedium = "linkMedium",
  linkLarge = "linkLarge",
}

export const LinkTemplate = ({ href, text, variant }: ILink) => {
  return (
    <Link href={href}>
      <LinkSC variant={variant}>
        <Typography variant={VariantsTypography.button}>{text}</Typography>
        <Arrow>
          <ArrowRightIcon />
        </Arrow>
      </LinkSC>
    </Link>
  );
};
