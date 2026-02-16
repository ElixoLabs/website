import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import WhyItMatters from '@/components/home/WhyItMatters';
import Standards from '@/components/home/Standards';
import WhyUs from '@/components/home/WhyUs';
import OurProcess from '@/components/home/OurProcess';
import FAQ from '@/components/home/FAQ';
import ReadyToStart from '@/components/home/ReadyToStart';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | AI Agent Development & Automation",
  description: "ElixoLabs builds production-grade AI agent systems, operational platforms, and intelligent automation for startups and businesses. Architecture-first AI development with full documentation and deployment.",
  keywords: "AI agency, AI development, AI agent development, AI automation, operational platforms, intelligent automation, AI product engineering, custom AI solutions, AI system architecture, AI consulting",
  openGraph: {
    title: "ElixoLabs - AI-Native Product Engineering",
    description: "Build intelligent systems that run your business. AI agents, operational platforms, and workflow automation designed for production.",
    type: "website",
  },
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyItMatters />
      <Standards />
      <WhyUs />
      <OurProcess />
      <FAQ />
      <ReadyToStart />
      <Footer />
    </>
  );
};

export default Home;