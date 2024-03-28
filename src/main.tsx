import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Venus from './Planets/Venus/Venus.tsx';
import Earth from './Planets/Earth/Earth.tsx';
import Mars from './Planets/Mars/Mars.tsx';
import Jupiter from './Planets/Jupiter/Jupiter.tsx';
import Saturn from './Planets/Saturn/Saturn.tsx';
import Uranus from './Planets/Uranus/Uranus.tsx';
import Neptune from './Planets/Neptune/Neptune.tsx';
import App from './App.tsx';
import MercuryDesktop from './Planets/MercuryDesktop/MercuryStructure.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mercury-structure",
    element: <MercuryDesktop />,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/uranus",
    element: <Uranus />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
