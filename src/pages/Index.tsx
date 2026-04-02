import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TelegramCTA } from "@/components/TelegramCTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TelegramCTA />
      <Footer />
    </>
  );
}
