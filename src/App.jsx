import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout ></MainLayout>}>
      <Route index element={<HomePage></HomePage>} />
    </Route>
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
