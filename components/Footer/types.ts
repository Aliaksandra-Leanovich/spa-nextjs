interface ILinkSubcategories {
  name: string;
  link: string;
}

export interface IFooterData {
  category: string;
  link: string;
  subcategories: ILinkSubcategories[];
}
