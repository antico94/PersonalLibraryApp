
import Login from './components/login/login';
import FirstPage from "./../src/pages/home/home"

const AppRoutes = [
    {
        index: true,
        element: <FirstPage/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    // {
    //     path: '/fetch-data',
    //     element: <FetchData/>
    // }
];

export default AppRoutes;
