import { LinkVariants } from "../../enums/LinkVariants";

export interface ILink {
  href: string;
  text: string;
  variant: LinkVariants;
}
