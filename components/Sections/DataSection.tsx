import React from "react";
import { Colors } from "../../ui/colors";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ContainerSC,
  DescriptionContainerSC,
  DescriptionSC,
  ImageContainerSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import DataImg from "/public/icons/data.svg";

export const DataSection = () => {
  return (
    <WrapperSC background={Colors.WHITE}>
      <ContainerSC>
        <DescriptionContainerSC>
          <TitleSC margin="0 0 24px 0" color={Colors.BLACK}>
            100% your data
          </TitleSC>
          <DescriptionSC margin="0 0 40px 0" color={Colors.BLACK}>
            The app is open source and your notes are saved to an open format,
            so you will always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </DescriptionSC>
          <LinkTemplate href="/whitepacefree" text="Read more" />
        </DescriptionContainerSC>
        <ImageContainerSC src={DataImg.src} alt={"work together"} />
      </ContainerSC>
    </WrapperSC>
  );
};
