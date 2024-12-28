import React from "react";
import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/About"
import ServicesSection from "../components/ServicesSection"
import ITConsultingSection from "../components/ITConsultingSection"
import Consultation from "../components/Consultation";
import Cart from '../components/Cart'
import PricingCards from '../components/PricingCards'
import Client from "../components/Client";
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <ITConsultingSection/>
      <Consultation/>
      <Cart/>
      <PricingCards/>
      <Client/>
      <Contact/>
      <BlogSection />
      
    </div>
    
  );
};

export default Home;
