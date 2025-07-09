import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage from "./pages/JobPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  // return (
  //   <div>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </div>
  // );

  return <RouterProvider router={router} />;
};

export default App;
