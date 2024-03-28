import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { Earth, EarthStructure, EarthSurface, Jupiter, JupiterStructure, JupiterSurface, Mars, MarsStructure, MarsSurface, MercuryStructure, MercurySurface, Neptune, NeptuneStructure, NeptuneSurface, Saturn, SaturnStructure, SaturnSurface, Uranus, UranusStructure, UranusSurface, Venus, VenusStructure, VenusSurface } from './Planets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mercury-structure",
    element: <MercuryStructure />,
  },
  {
    path: "/mercury-surface",
    element: <MercurySurface />,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/venus-structure",
    element: <VenusStructure />,
  },
  {
    path: "/venus-surface",
    element: <VenusSurface />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/earth-structure",
    element: <EarthStructure />,
  },
  {
    path: "/earth-surface",
    element: <EarthSurface />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/mars-structure",
    element: <MarsStructure />,
  },
  {
    path: "/mars-surface",
    element: <MarsSurface />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/jupiter-structure",
    element: <JupiterStructure />,
  },
  {
    path: "/jupiter-surface",
    element: <JupiterSurface />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/saturn-structure",
    element: <SaturnStructure />,
  },
  {
    path: "/saturn-surface",
    element: <SaturnSurface />,
  },
  {
    path: "/uranus",
    element: <Uranus />,
  },
  {
    path: "/uranus-structure",
    element: <UranusStructure />,
  },
  {
    path: "/uranus-surface",
    element: <UranusSurface />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
  {
    path: "/neptune-structure",
    element: <NeptuneStructure />,
  },
  {
    path: "/neptune-surface",
    element: <NeptuneSurface />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
