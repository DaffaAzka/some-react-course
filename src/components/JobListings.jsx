import { React, useEffect, useState} from "react";
// import jobs from "../jobs.json";
import JobListing from "./JobListing";
import axios from "axios";

const JobListings = ({isHome = false}) => {
  // console.log(jobs);
  // const jobLists = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async()=> {
      try {
        const response = await axios.get("http://localhost:8000/jobs");
        const jobData = isHome ? response.data.slice(0, 3) : response.data;
        setJobs(jobData)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs();
  }, [isHome]);


  return (
    <>
      <div className="space-y-4 space-x-4 py-4 bg-gray-100 grid grid-cols-3">
        {jobs .map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobListings;
