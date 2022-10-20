import { default as NextLink } from "next/link";
import React from "react";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import { Arrow, LinkSC } from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";
import { ILink } from "./types";

export const Link = ({ href, text, variant }: ILink) => {
  return (
    <NextLink href={href}>
      <LinkSC variant={variant}>
        <Typography variant={VariantsTypography.subtitle}>{text}</Typography>
        <Arrow>
          <ArrowRightIcon />
        </Arrow>
      </LinkSC>
    </NextLink>
  );
};
