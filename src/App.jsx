import React, { useState, useEffect } from "react";
import HomePage from "./pages/homePage";
import Loader from "./components/loader/loader";
import Menu from "./components/menu_btn/menu";
import Faculty from "./pages/Faculty";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import AboutUs from "./pages/AboutUs/AboutUs";
import AcademyAlliances from "./pages/Academy Alliances/AcademyAlliances";
import ContactUs from "./pages/Contact Us/ContactUs";
import Placementes from "./pages/Placementes/Placementes";
import Carousell from "./components/coursal/Coursal";
import ControlledCarousel from "./components/coursal/Coursal";
import DarkVariantExample from "./components/coursal/Coursal";
import Coursal from "./components/coursal/Coursal";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="absolute w-[70%] mx-[15%] top-0  ">
            <Header />
          </div>
          <Outlet />
          <Menu />{" "}
        </>
      )}
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coursal />,
      },
      {
        path: "/faculty",
        element: <Faculty />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/academyAlliances",
        element: <AcademyAlliances />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/placementes",
        element: <Placementes />,
      },
    ],
  },
]);

export default App;
