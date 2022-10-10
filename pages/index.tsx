import type { NextPage } from "next";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import styled from "@emotion/styled";
import { EveryWhereBlock } from "../components/EverywhereBlock/EveryWhereBlock";
import { SponsorsBlock } from "../components/SponsorsBlock/SponsorsBlock";
import { Footer } from "../components/Footer/Footer";
import { MainSection } from "../components/TemplateBlocks/MainSection";
import { ManagementSection } from "../components/TemplateBlocks/ManagementSection";
import { ExtensionSection } from "../components/TemplateBlocks/ExtensionSection";
import { CustomiseSection } from "../components/TemplateBlocks/CustomiseSection";
import { DataSection } from "../components/TemplateBlocks/DataSection";
import { FavoriteSection } from "../components/TemplateBlocks/FavoriteSection";
import { ClientsSection } from "../components/TemplateBlocks/ClientsSection";
import { TodaySection } from "../components/TemplateBlocks/TodaySection";

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
