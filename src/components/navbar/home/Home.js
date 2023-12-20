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
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
