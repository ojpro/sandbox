// Import Components
// TODO: use lazy loading.
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";
import Dashboard from "../Pages/Dasboard/Dashboard";
import ProjectsList from "../Pages/Dasboard/Project/ProjectsList";
import newProject from "../Pages/Dasboard/Project/NewProject";

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
    // TODO: Create seperated file for dashboard routes
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'Projects List',
        path: '/dashboard/projects',
        component: ProjectsList
    },
    {
        name: 'New Project',
        path: '/dashboard/projects/new',
        component: newProject
    }
]

export default routes;
