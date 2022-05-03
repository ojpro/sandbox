// Import Components
// TODO: use lazy loading.
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";
import Dashboard from "../Pages/Dasboard/Dashboard";

// Declare routes
// TODO: separate routes
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Projects',
        path: '/projects',
        component: Projects
    },
    {
        name: 'Project',
        path: '/project',
        component: SingleProject
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
    }
]

export default routes;
