import type { NextPage } from "next";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import { CustomiseBlock } from "../components/TemplateBlocks/CustomiseBlock";
import { ExtensionBlock } from "../components/TemplateBlocks/ExtensionBlock";
import { ManagementBlock } from "../components/TemplateBlocks/ManagementBlock";
import { MainBlock } from "../components/TemplateBlocks/MainBlock";
import styled from "@emotion/styled";
import { EveryWhereBlock } from "../components/EverywhereBlock/EveryWhereBlock";
import { DataBlock } from "../components/TemplateBlocks/DataBlock";
import { FavoriteBlock } from "../components/TemplateBlocks/FavoriteBlock";
import { SponsorsBlock } from "../components/SponsorsBlock/SponsorsBlock";
import { ClientsBlock } from "../components/TemplateBlocks/ClientsBlock";
import { TodayBlock } from "../components/TemplateBlocks/TodayBlock";
import { Footer } from "../components/Footer/Footer";
import { media } from "../ui/media";

const Home: NextPage = () => {
  return (
    <Container>
      <MainBlock />
      <ManagementBlock />
      <ExtensionBlock />
      <CustomiseBlock />
      <PricingBlock />
      <EveryWhereBlock />
      <DataBlock />
      <SponsorsBlock />
      <FavoriteBlock />
      <ClientsBlock />
      <TodayBlock />
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
