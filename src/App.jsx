import React, { useState, useEffect } from "react";
import HomePage from "./pages/homePage";
import Loader from "./components/loader/loader";
import Menu from "./components/menu_btn/menu";
import Faculty from "./pages/Faculty";
import Header from "./components/Header";

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
          <div className="absolute w-[70%] mx-[15%] top-0 shadow-2xl rounded-xl ">
            <Header />
          </div>
          {/* <HomePage /> */}
          <Faculty />
          <Menu />{" "}
        </>
      )}
    </>
  );
}

export default App;
