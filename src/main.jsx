import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { AppRouter } from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
