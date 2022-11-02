import { default as NextLink } from "next/link";
import { VariantsTypography } from "../../enums";
import { ArrowRightIcon } from "../../public/icons/";
import { Typography } from "../../ui";
import { Arrow, LinkSC } from "./styles";
import { ILinkProps } from "./types";

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
