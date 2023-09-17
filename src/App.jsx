import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AdProduct from './pages/AdProduct';

const App = () => {





  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/adproducts' element={<AdProduct/>} />
        <Route path="/product/:title" element={<ProductDetails />} />
      </Route>
    )
  );






  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
