import React from 'react';
import {createBrowserRouter, Route, Router, RouterProvider} from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage.jsx';
import {CartPage} from "./pages/CartPage.jsx";
import {Layout} from "./components/Layout.jsx";


const router = createBrowserRouter([
  {

    path:"/pizza",
    element:   <Layout/> ,
    children:[
      {
        path: "/",
        element: <CatalogPage />,
       // loader: async ()=>{
       //  return fetch()
       //  }
      },
      {
        path:"/cart",
        element:<CartPage/>,

      },

    ]
  }

]);
export const App = () => (
      <RouterProvider router={router} />
);
