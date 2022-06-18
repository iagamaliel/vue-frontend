<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">BNB</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/certificate" class="nav-link">Certificados</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/financialType" class="nav-link">Tipos de Financiera</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/channels" class="nav-link">Canales</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cycle" class="nav-link">Ciclos</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
