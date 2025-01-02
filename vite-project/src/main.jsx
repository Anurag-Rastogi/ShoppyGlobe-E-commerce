import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ProductList from './components/ProductList.jsx';
import { lazy } from 'react';
import Cart from './components/Cart.jsx';
// routing Configuration

const About = lazy(()=>import('./components/About.jsx') );
const Contact = lazy(()=>import('./components/Contact.jsx') );
const NotFound = lazy(()=>import('./components/NotFound.jsx') );
const ProductDetail = lazy(()=>import('./components/ProductDetail.jsx') );

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<ProductList/>
      },
      {
        path: "/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/product/:id",
        element:<ProductDetail/>
      },{
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
