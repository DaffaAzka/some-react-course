import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobListings isHome={true}></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
}

// Remove the default export line
