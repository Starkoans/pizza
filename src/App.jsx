import React from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage.jsx';
import {CartPage} from "./pages/CartPage.jsx";
import {Layout} from "./components/Layout.jsx";


const router = createHashRouter([
  {

    path:"/",
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
