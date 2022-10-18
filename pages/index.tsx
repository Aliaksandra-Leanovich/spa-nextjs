import type { NextPage } from "next";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import styled from "@emotion/styled";
import { Footer } from "../components/Footer/Footer";
import { MainSection } from "../components/Sections/MainSection";
import { ManagementSection } from "../components/Sections/ManagementSection";
import { ExtensionSection } from "../components/Sections/ExtensionSection";
import { CustomiseSection } from "../components/Sections/CustomiseSection";
import { EverywhereSection } from "../components/Sections/EverywhereSection";
import { DataSection } from "../components/Sections/DataSection";
import { SponsorsSection } from "../components/Sections/SponsorsSection";
import { FavoriteSection } from "../components/Sections/FavoriteSection";
import { ClientsSection } from "../components/Sections/ClientsSection";
import { TodaySection } from "../components/Sections/TodaySection";
import { Header } from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ContainerSC>
        <MainSection />
        <ManagementSection />
        <ExtensionSection />
        <CustomiseSection />
        <PricingBlock />
        <EverywhereSection />
        <DataSection />
        <SponsorsSection />
        <FavoriteSection />
        <ClientsSection />
        <TodaySection />
        <Footer />
      </ContainerSC>
    </>
  );
};

export default Home;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
