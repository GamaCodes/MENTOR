import React from "react";
import Hero from "../../Components/Hero";
import About from "../../Components/About";
import Service from "../../Components/Service";
import Footer from "../../Components/Footer";

export default function index() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  );
}
