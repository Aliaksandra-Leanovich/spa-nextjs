import React from "react";
import { VariantsTypography } from "../../enums";
import { Typography } from "../../ui";
import { ContainerSC, TitleContainerSC, UnderlinerImageSC } from "./style";
import { IUnderlineProps } from "./types";

export const UnderlinedTitle = ({
  children,
  color,
  css,
  img,
}: React.PropsWithChildren<IUnderlineProps>) => {
  return (
    <ContainerSC>
      <TitleContainerSC>
        <Typography variant={VariantsTypography.h1} color={color}>
          {children}
        </Typography>
      </TitleContainerSC>
      <UnderlinerImageSC css={css} src={img} />
    </ContainerSC>
  );
};
