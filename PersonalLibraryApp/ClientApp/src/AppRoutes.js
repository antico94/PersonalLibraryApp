

import FirstPage from "./../src/pages/home/home"
import LoginPage from './../src/pages/login-page/LoginPage';

const AppRoutes = [
    {
        index: true,
        element: <FirstPage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    // {
    //     path: '/fetch-data',
    //     element: <FetchData/>
    // }
];

export default AppRoutes;
