import React from "react";

export default function Hero({
  title = "Become a react",
  subtitle = "Find react jobs that fit your skill set",
}) {
  return (
    <>
      <div className="bg-indigo-700 py-20 mv-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="my-4 twxt-xl text-white">{subtitle} </p>
          </div>
        </div>
      </div>
    </>
  );
}
