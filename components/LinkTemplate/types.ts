export enum LinkVariants {
  linkSmall = "linkSmall",
  linkMedium = "linkMedium",
  linkLarge = "linkLarge",
}

export interface ILink {
  href: string;
  text: string;
  variant: LinkVariants;
}
