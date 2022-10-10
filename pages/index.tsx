import type { NextPage } from "next";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import styled from "@emotion/styled";
import { EveryWhereBlock } from "../components/EverywhereBlock/EveryWhereBlock";
import { SponsorsBlock } from "../components/SponsorsBlock/SponsorsBlock";
import { Footer } from "../components/Footer/Footer";
import { MainSection } from "../components/Sections/MainSection";
import { ManagementSection } from "../components/Sections/ManagementSection";
import { ExtensionSection } from "../components/Sections/ExtensionSection";
import { CustomiseSection } from "../components/Sections/CustomiseSection";
import { DataSection } from "../components/Sections/DataSection";
import { FavoriteSection } from "../components/Sections/FavoriteSection";
import { ClientsSection } from "../components/Sections/ClientsSection";
import { TodaySection } from "../components/Sections/TodaySection";

const Home: NextPage = () => {
  return (
    <Container>
      <MainSection />
      <ManagementSection />
      <ExtensionSection />
      <CustomiseSection />
      <PricingBlock />
      <EveryWhereBlock />
      <DataSection />
      <SponsorsBlock />
      <FavoriteSection />
      <ClientsSection />
      <TodaySection />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
