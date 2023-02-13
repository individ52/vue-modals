import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AuthorView from "@/views/AuthorView.vue";
import DocView from "@/views/DocView.vue";

export enum AppLinks {
    HOME = "/",
    AUTHOR = "/author",
    DOC = "/documentation",
}

const routes: Array<RouteRecordRaw> = [
    {
        path: AppLinks.HOME,
        name: "home",
        component: HomeView,
    },
    {
        path: AppLinks.AUTHOR,
        name: "Author",
        component: AuthorView,
    },
    {
        path: AppLinks.DOC,
        name: "Documentation",
        component: DocView,
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
