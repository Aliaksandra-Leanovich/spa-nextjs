import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import Apple from "/public/apple-black-logo 2.svg";
import Window from "/public/windows-logo 1.svg";
import Android from "/public/android-logo 1.svg";
import {
  AppImage,
  AppsContainer,
  BlockTitle,
  BlockTodayDescription,
  BlockTodayDescriptionSecond,
  MainContainer,
  TodayContainer,
} from "./styles";

export const TodayBlock = () => {
  return (
    <MainContainer>
      <TodayContainer>
        <BlockTitle>Try Whitepace today</BlockTitle>
        <BlockTodayDescription>
          Get started for free. Add your whole team as your needs grow.
        </BlockTodayDescription>
        <LinkTemplate href="/whitepace" text="Try Taskey free" />
        <BlockTodayDescriptionSecond>
          On a big team? Contact sales
        </BlockTodayDescriptionSecond>
        <AppsContainer>
          <AppImage src={Apple.src} alt="apple" />
          <AppImage src={Window.src} alt="window" />
          <AppImage src={Android.src} alt="android" />
        </AppsContainer>
      </TodayContainer>
    </MainContainer>
  );
};
