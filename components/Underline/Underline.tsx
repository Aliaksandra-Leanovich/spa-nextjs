import React from "react";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { TitleContainerSC, TitleTextSC, UnderlinerImageSC } from "./style";
import { IUnderlineProps } from "./types";

const UnderlinedTitle = ({
  children,
  color,
  css,
  img,
}: React.PropsWithChildren<IUnderlineProps>) => {
  return (
    <div>
      <TitleContainerSC>
        <TitleTextSC variant={VariantsTypography.h1} color={color}>
          {children}
        </TitleTextSC>
        <UnderlinerImageSC css={css} src={img} />
      </TitleContainerSC>
    </div>
  );
};

export default UnderlinedTitle;
