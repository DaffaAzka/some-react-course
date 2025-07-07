import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showDescription, setShowDescription] = useState(false);

  let description = job.description;
  if (!showDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div
      key={job.id}
      className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
      <div className="p-4 md:p-5 space-y-4">
        <span>{job.type}</span>
        <h3 className="text-lg font-bold text-gray-800 font">{job.title}</h3>
        <div className="space-y-1">
          <p className="mt-1 text-gray-500 ">{description}</p>

          <button
            className="text-indigo-500 hover:text-indigo-800"
            onClick={() => setShowDescription((prevState) => !prevState)}>
            {!showDescription ? "More" : "Less"}
          </button>
        </div>

        <p className="mt-1 text-purple-500 ">{job.salary} / Year</p>
        <p className="mt-1 text-blue-500 ">
          <FaMapMarker className="inline" />
          {job.location}
        </p>
        <button className="mt-2 py-2 px-3 w-full gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          <Link to={`/job/${job.id}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default JobListing;
