import React from "react";
import { VariantsTypography } from "../../enums/TypographyVariants";
import Typography from "../../ui/Typography";
import { ContainerSC, TitleContainerSC, UnderlinerImageSC } from "./style";
import { IUnderlineProps } from "./types";

const UnderlinedTitle = ({
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

export default UnderlinedTitle;
