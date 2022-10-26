import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { PricingBlock } from "../components/PricingBlock/PricingBlock";
import { Footer } from "../components/Footer/Footer";
import { MainSection } from "../components/Sections/MainSection";
import { ManagementSection } from "../components/Sections/ManagementSection";
import { ExtensionSection } from "../components/Sections/ExtensionSection";
import { CustomiseSection } from "../components/Sections/CustomiseSection";
import { YourWorkSection } from "../components/Sections/YourWork";
import { YourDataSection } from "../components/Sections/YourDataSection";
import { SponsorsSection } from "../components/Sections/SponsorsSection";
import { AppsSection } from "../components/Sections/AppsSection";
import { ClientsSection } from "../components/Sections/ClientsSection";
import { FreeTrialSection } from "../components/Sections/FreeTrialSection";
import { Header } from "../components/Header/Header";
import { MainSC } from "./style";

const Home: NextPage = () => {
  const router = useRouter();

  const accessToken = localStorage.getItem("authUser");

  if (!accessToken) {
    router.replace("/signup");
    return null;
  }

  return (
    <>
      <Header />
      <MainSC>
        <MainSection />
        <ManagementSection />
        <ExtensionSection />
        <CustomiseSection />
        <PricingBlock />
        <YourWorkSection />
        <YourDataSection />
        <SponsorsSection />
        <AppsSection />
        <ClientsSection />
        <FreeTrialSection />
        <Footer />
      </MainSC>
    </>
  );
};

export default Home;
