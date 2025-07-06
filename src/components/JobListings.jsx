import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  // console.log(jobs);
  const recentJob = jobs.slice(0, 3);
  return (
    <>
      <div className="space-y-4 space-x-4 py-4 bg-gray-100 grid grid-cols-3">
        {recentJob.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobListings;
