export interface ILinkSubcategories {
  name: string;
  link: string;
}
export interface ILinkNavigation {
  href: string;
  title: string;
  subcategories?: ILinkSubcategories[];
  iconOpen?: JSX.Element;
}
export interface ILink {
  link: ILinkNavigation;
}
