import React, { useState, useEffect } from "react";
import HomePage from "./pages/homePage";
import Loader from "./components/loader/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <HomePage />}</>;
}

export default App;
