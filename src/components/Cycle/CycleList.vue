
<template>
  <div class="list row">
 
    <div class="col-md-6">
      <!-- Btn Nuevo -->
      <router-link to="/addCycle" class="nav-link">Nuevo</router-link>
      <!-- end -->
      <h4>Ciclos</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(cycle, index) in cycles"
          :key="index"
          @click="setActiveCycle(cycle, index)"
        >
          {{ cycle.asfi_code }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCycle.id">
        <h4>Ciclos</h4>
        <div>
          <label><strong>Asfi Code:</strong></label>
          {{ currentCycle.asfi_code }}
        </div>
        <div>
          <label><strong>Serial:</strong></label>
          {{ currentCycle.serial_cycle }}
        </div>

        <router-link
          :to="'/cycles/' + currentCycle.id"
          class="badge badge-warning"
          >Editar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CycleDataService from "@/services/CycleDataService";
import Cycle from "@/types/Cycle";
import ResponseData from "@/types/ResponseData";

console.log("CycleDataService");

export default defineComponent({
  name: "Cycle-list",
  data() {
    return {
      cycles: [] as Cycle[],
      currentCycle: {} as Cycle,
      currentIndex: -1,
      asfi_code: "",
      serial_cycle: ""
    };
  },
  methods: {
    retrieveCycles() {
      CycleDataService.getAll()
        .then((response: ResponseData) => {
          this.cycles = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCycles();
      this.currentCycle = {} as Cycle;
      this.currentIndex = -1;
    },

    setActiveCycle(cycle: Cycle, index = -1) {
      this.currentCycle = cycle;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveCycles();
  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>



