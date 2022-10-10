import React from "react";
import { Header } from "../Header/Header";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work1.webp";

import { Colors } from "../../ui/colors";
import {
  ContainerSC,
  DescriptionContainerSC,
  DescriptionSC,
  ImageContainerSC,
  MainContainerSC,
  TitleSC,
} from "./styles";

export const MainSection = () => {
  return (
    <MainContainerSC>
      <Header />
      <ContainerSC>
        <DescriptionContainerSC>
          <TitleSC color={Colors.WHITE} margin="0 0 24px 0">
            Get More Done with whitepace
          </TitleSC>
          <DescriptionSC color={Colors.WHITE} margin=" 0 0 60px 0">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </DescriptionSC>
          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
      </ContainerSC>
    </MainContainerSC>
  );
};
