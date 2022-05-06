import React from 'react';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from "../components/layout/NotFoundPage";
import Products from "../components/products/Products";
function Index() {
    return useRoutes([
        { path: '/', element: <Products />},
        { path: '/*',element: <NotFoundPage /> }
    ])
}

export default Index;