import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <Card>
        <h3 className="text-lg font-bold text-gray-800">For Developer</h3>
        <p className="mt-2 text-gray-500">
          Browse our React Jobs and Start your career today
        </p>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
          href="#">
          Card link
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </Card>

      <Card bg="bg-indigo-100">
        <h3 className="text-lg font-bold text-gray-800">For Employers</h3>
        <p className="mt-2 text-gray-500">
          Browse our React Jobs and Start your career today
        </p>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
          href="#">
          Card link
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </Card>
    </>
  );
};

export default HomeCards;
