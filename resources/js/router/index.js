import {createRouter, createWebHistory} from "vue-router";

// Import routes
import routes from "./router";

// Create router
const router = createRouter({
    // TODO: Handle 404 Error
    history:createWebHistory(),
    routes
})

export default router;
