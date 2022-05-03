// Import Components
// TODO: use lazy loading.
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";

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
    }
]

export default routes;
