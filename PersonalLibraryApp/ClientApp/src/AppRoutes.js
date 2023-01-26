import LoginPage from './../src/pages/login-page/LoginPage';
import IntroPage from './pages/intro-page/intro';
import HomePage from './pages/home-page/home'

const AppRoutes = [
    {
        index: true,
        element: <HomePage/>
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
