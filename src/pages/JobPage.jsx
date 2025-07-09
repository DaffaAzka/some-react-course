import axios from "axios";
import { React, useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import { useParams } from "react-router-dom";

function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(`/api/jobs/${id}`);
      setJob(response.data);
    };

    fetchJob();
  }, [id]);

  return (
    <>
      <div className="">{job && <JobListing key={job.id} job={job} />}</div>
    </>
  );
}

// function jobLoader(id) async {

// }

export default JobPage;
