import type { NextPage } from "next";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import { CustomiseBlock } from "../components/TemplateBlocks/CustomiseBlock";
import { ExtensionBlock } from "../components/TemplateBlocks/ExtensionBlock";
import { ManagementBlock } from "../components/TemplateBlocks/ManagementBlock";
import { MainBlock } from "../components/TemplateBlocks/MainBlock";

const Home: NextPage = () => {
  return (
    <>
      <MainBlock />
      <ManagementBlock />
      <ExtensionBlock />
      <CustomiseBlock />
      <PricingBlock />
    </>
  );
};

export default Home;
