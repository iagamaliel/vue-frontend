import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/addCertificate",
    name: "addCertificate",
    component: () => import("./components/Certificate/AddCertificate.vue")
  },
  {
    path: "/",
    alias: "/certificate",
    name: "certificate",
    component: () => import("./components/Certificate/CertificateList.vue")
  },
  {
    path: "/certificates/:id",
    name: "certificates-details",
    component: () => import("./components/Certificate/CertificateDetails.vue"),
  },
  {
    path: "/",
    alias: "/financialType",
    name: "financialType",
    component: () => import("./components/FinancialType/FinancialTypeList.vue")
  },
  {
    path: "/",
    alias: "/addFinancialType",
    name: "addFinancialType",
    component: () => import("./components/FinancialType/AddFinancialType.vue")
  },
  {
    path: "/financialTypes/:id",
    name: "financialTypes-details",
    component: () => import("./components/FinancialType/FinancialTypeDetails.vue"),
  },
  {
    path: "/",
    alias: "/cycle",
    name: "cycle",
    component: () => import("./components/Cycle/CycleList.vue")
  },
  {
    path: "/",
    alias: "/addCycle",
    name: "addCycle",
    component: () => import("./components/Cycle/AddCycle.vue")
  },
  {
    path: "/cycles/:id",
    name: "cycles-details",
    component: () => import("./components/Cycle/CycleDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
