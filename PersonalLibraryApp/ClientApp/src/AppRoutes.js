import LoginPage from './../src/pages/login-page/LoginPage';
import IntroPage from './pages/intro-page/intro';
import Homepage from './pages/home-page/Homepage'

const AppRoutes = [
    {
        index: true,
        element: <Homepage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/intro',
        element: <IntroPage/>
    }
];

export default AppRoutes;
