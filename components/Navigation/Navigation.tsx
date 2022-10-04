import React from "react";
import { StyledNavigation, StyledLink } from "./styles";
import ArrowIcon from "/public/icons/arrowUp.svg";
import Link from "next/link";

const config = [
  {
    href: "/test",
    icon: ArrowIcon.src,
    title: "Products",
  },
  {
    href: "/",
    icon: ArrowIcon.src,
    title: "Solutions",
  },
  {
    href: "/",
    icon: ArrowIcon.src,
    title: "Resources",
  },
  {
    href: "/",
    icon: ArrowIcon.src,
    title: "Pricing",
  },
];

export const Navigation = () => {
  return (
    <StyledNavigation>
      {config.map((link, index) => (
        <Link href={link.href} key={index}>
          <a>
            <span>{link.title}</span>
            <div>
              <img src={link.icon} alt={"arrow"} />
            </div>
          </a>
        </Link>
      ))}
    </StyledNavigation>
  );
};
