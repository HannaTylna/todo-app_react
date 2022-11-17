import { Completed } from "./components/Completed";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

const AppRoutes = [
    {
        index: true,
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />

    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/completed',
        element: <Completed />
    }
];

export default AppRoutes;

