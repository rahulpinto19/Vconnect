import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "../../../containers";
import CTA from "../../cta/CTA";

const Home = () => {
  return (
    <>
      <Header />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
