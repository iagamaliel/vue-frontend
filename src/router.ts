import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList.vue"),
  },
  {
    path: "/tutorials/:DepartmentId",
    name: "tutorial-details",
    component: () => import("./components/TutorialDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue"),
  },
  {
    path: "/addNew",
    name: "addNew",
    component: () => import("./components/AddTutorial.vue"),
  },
  {
    path: "/",
    alias: "/certificate",
    name: "certificate",
    component: () => import("./components/Certificate/CertificateList.vue")
  },
  {
    path: "/",
    alias: "/hourType",
    name: "hourType",
    component: () => import("./components/WorkHourType/WorkHourTypeList.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
