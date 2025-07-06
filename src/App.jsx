import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
    </div>
  );
};

export default App;
