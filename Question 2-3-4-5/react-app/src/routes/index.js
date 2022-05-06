import React from 'react';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from "../components/layout/NotFoundPage";
import Products from "../components/products/Products";
import Q5C from "../components/q5component/Q5C";
function Index() {
    return useRoutes([
        { path: '/', element: <Products />},
        { path: '/q5', element: <Q5C /> },
        { path: '/*',element: <NotFoundPage /> }
    ])
}

export default Index;