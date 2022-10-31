import { default as NextLink } from "next/link";
import React from "react";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import { Arrow, LinkSC } from "./styles";
import { Typography } from "../../ui/Typography";
import { ILinkProps } from "./types";
import { VariantsTypography } from "../../enums/TypographyVariants";

export const Link = ({ href, text, variant }: ILinkProps) => {
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
