import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PricingBlock } from "../components/PricingBlock";
import {
  AppsSection,
  ClientsSection,
  CustomiseSection,
  ExtensionSection,
  FreeTrialSection,
  MainSection,
  ManagementSection,
  SponsorsSection,
  YourDataSection,
  YourWorkSection,
} from "../components/Sections";
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
