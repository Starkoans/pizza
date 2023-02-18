import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage.jsx';
import {CartPage} from "./pages/CartPage.jsx";
import {Layout} from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
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

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false
//     }
//   }
// });

export const App = () => (
  // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  // </QueryClientProvider>
);
