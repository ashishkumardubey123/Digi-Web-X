import React from "react";


import FAQSection from "@/Components/FAQSection";
import Herosection from "@/Components/HeroSection";
import HowWeWork from "@/Components/HowWeWork";

import ServicesSection from "@/Components/ServicesSection";

import StatsSection from "@/Components/StatsSection";
import TestimonialSection from "@/Components/TestimonialSection";
import WhyChooseUs from "@/Components/whayChoseUs";
import ContactPage from "@/app/Contact/page";

function Homepage() {
  return (
    <div>
      <Herosection />
      <StatsSection />
      {/* <Our_services/> */}
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <TestimonialSection />
      <FAQSection />
      <ContactPage />
    </div>
  );
}

export default Homepage;
