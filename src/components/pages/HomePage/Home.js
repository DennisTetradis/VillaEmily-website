import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <div>This is shis</div>
      <HeroSection {...homeObjOne} />
      <h1>this is shit</h1>
    </>
  );
}

export default Home;
