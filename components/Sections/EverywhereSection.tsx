import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Colors } from "../../ui/colors";
import {
  ContainerEverywhereSC,
  DescriptionSC,
  EverywhereContainerSC,
  TitleSC,
} from "./styles";

export const EverywhereSection = () => {
  return (
    <EverywhereContainerSC background={Colors.BLUE}>
      <ContainerEverywhereSC>
        <TitleSC margin="0 0 24px 0" color={Colors.WHITE}>
          Your work, everywhere you are
        </TitleSC>
        <DescriptionSC margin="0 0 40px 0" color={Colors.WHITE}>
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </DescriptionSC>
        <LinkTemplate href="/whitepacefree" text="Try Taskey" />
      </ContainerEverywhereSC>
    </EverywhereContainerSC>
  );
};
