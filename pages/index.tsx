import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import styled from "@emotion/styled";
import { Footer } from "../components/Footer/Footer";
import { MainSection } from "../components/Sections/MainSection";
import { ManagementSection } from "../components/Sections/ManagementSection";
import { ExtensionSection } from "../components/Sections/ExtensionSection";
import { CustomiseSection } from "../components/Sections/CustomiseSection";
import { EverywhereSection } from "../components/Sections/EverywhereSection";
import { YourDataSection } from "../components/Sections/YourDataSection";
import { SponsorsSection } from "../components/Sections/SponsorsSection";
import { FavoriteSection } from "../components/Sections/FavoriteSection";
import { ClientsSection } from "../components/Sections/ClientsSection";
import { TodaySection } from "../components/Sections/TodaySection";
import { Header } from "../components/Header/Header";

const Home: NextPage = () => {
  const router = useRouter();

  const accessToken = localStorage.getItem("authUser");

  if (!accessToken) {
    router.replace("/signup");
    return null;
  } else {
    return (
      <>
        <Header />
        <MainSC>
          <MainSection />
          <ManagementSection />
          <ExtensionSection />
          <CustomiseSection />
          <PricingBlock />
          <EverywhereSection />
          <YourDataSection />
          <SponsorsSection />
          <FavoriteSection />
          <ClientsSection />
          <TodaySection />
          <Footer />
        </MainSC>
      </>
    );
  }
};

export default Home;

export const MainSC = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
