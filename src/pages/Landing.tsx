import React from "react";
import Hero from "../components/home/Hero";
import FeaturedArticles from "../components/home/FeaturedArticles";
import Topics from "../components/home/Topics";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Login from "./Login";

function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedArticles />
      <Topics />
      <Features />
      <HowItWorks />
      <Login />
    </div>
  );
}

export default Landing;
