import React from "react";

const JobListing = ({ job }) => {
  return (
    <div
      key={job.id}
      className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
      <div className="p-4 md:p-5 space-y-4">
        <span>{job.type}</span>
        <h3 className="text-lg font-bold text-gray-800 font">{job.title}</h3>
        <p className="mt-1 text-gray-500 ">{job.description}</p>
        <p className="mt-1 text-purple-500 ">{job.salary} / Year</p>
        <p className="mt-1 text-blue-500 ">{job.location}</p>
        <button className="mt-2 py-2 px-3 w-full gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          <a href={`/job/${job.id}`}>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default JobListing;
