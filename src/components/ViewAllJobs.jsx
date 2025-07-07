import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section>
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl mx-8 my-4">
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
