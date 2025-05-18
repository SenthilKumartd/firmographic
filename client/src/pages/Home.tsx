import Hero from "@/components/Hero";
import SearchInterface from "@/components/SearchInterface";
import FeatureShowcase from "@/components/FeatureShowcase";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FirmoGraph - Comprehensive Firmographic Data Platform</title>
        <meta name="description" content="Access comprehensive firmographic data on millions of companies to power your sales and marketing strategies. Search companies by industry, size, location and more." />
        <meta property="og:title" content="FirmoGraph - Comprehensive Firmographic Data Platform" />
        <meta property="og:description" content="Access comprehensive firmographic data on millions of companies to power your sales and marketing strategies." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <SearchInterface />
      <FeatureShowcase />
      <TeamSection />
      <CTASection />
    </>
  );
};

export default Home;
