import { createApp } from "vue";
import App from "@/App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "@/router";
import axios from 'axios';

axios.defaults.baseURL='https://localhost:7102/api/';

createApp(App).use(router).mount("#app");