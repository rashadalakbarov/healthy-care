import React from "react";

// components
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
