export interface ILinkSubcategories {
  name: string;
  link: string;
}
export interface ILinkNavigationProps {
  href: string;
  title: string;
  subcategories?: ILinkSubcategories[];
  iconOpen?: JSX.Element;
}
export interface ILink {
  link: ILinkNavigationProps;
}

export interface IStylesProps {
  isOpen: boolean;
}
export interface IRightNavigationProps {
  isOpen: boolean;
  data: ILinkNavigationProps[];
}
