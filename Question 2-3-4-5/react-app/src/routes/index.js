import React from 'react';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from "../components/layout/NotFoundPage";
function Index() {
    return useRoutes([

        {path: '/404',element: <NotFoundPage /> }
    ])
}

export default Index;