import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";


export default function Home(){
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorks/>
      <Pricing/>
    </main>
  )
}