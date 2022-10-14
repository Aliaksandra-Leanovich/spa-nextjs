import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import ArrowRightIcon from "public/icons/arrow-right.svg";

interface ILink {
  href: string;
  text: string;
  padding?: string;
}

type LinkStyle = Pick<ILink, "padding">;

export const LinkTemplate = ({ href, text, padding }: ILink) => {
  return (
    <Link href={href}>
      <StyledLink padding={padding}>
        {text} <Arrow src={ArrowRightIcon.src} alt={"arrow"} />
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a<LinkStyle>`
  padding: ${({ padding }) => padding};
  width: max-content;

  border: none;
  border-radius: 8px;
  background-color: ${Colors.LIGHTBLUE};
  color: ${Colors.WHITE};
  ${typography.button}

  z-index: 1;

  cursor: pointer;

  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: ${Colors.YELLOW};
  }
`;

const Arrow = styled.img`
  width: 10px;
  margin-left: 10px;
`;
