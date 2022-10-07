import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import ArrowRightIcon from "public/icons/arrow-right.svg";

interface IButton {
  href: string;
  text: string;
}

export const LinkTemplate = ({ href, text }: IButton) => {
  return (
    <Link href={href}>
      <StyledLink>
        {text} <Arrow src={ArrowRightIcon.src} alt={"arrow"} />
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  background-color: ${Colors.LIGHTBLUE};
  color: ${Colors.WHITE};
  ${typography.button}
  border: none;
  border-radius: 8px;
  padding: 18px;

  cursor: pointer;
  width: max-content;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${Colors.YELLOW};
    transform: translateY(-2px);
  }
`;

const Arrow = styled.img`
  width: 10px;
  margin-left: 10px;
`;
