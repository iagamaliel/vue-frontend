
<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar por descripción"
          v-model="description"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <!-- Btn Nuevo -->
      <router-link to="/addNew" class="nav-link">Nuevo</router-link>
      <!-- end -->
      <h4>Tipos Horarios</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(workHourType, index) in workHourTypes"
          :key="index"
          @click="setActiveWorkHourType(workHourType, index)"
        >
          {{ workHourType.description }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentWorkHourType.id">
        <h4>Tipo de Horarios</h4>
        <div>
          <label><strong>Descripción:</strong></label>
          {{ currentWorkHourType.description }}
        </div>

        <router-link
          :to="'/workhourtypes/' + currentWorkHourType.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkHourTypeDataService from "@/services/WorkHourTypeDataService";
import WorkHourType from "@/types/WorkHourType";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "HourTypes-list",
  data() {
    return {
      workHourTypes: [] as WorkHourType[],
      currentWorkHourType: {} as WorkHourType,
      currentIndex: -1,
      description: "",
    };
  },
  methods: {
    retrieveWourHourTypes() {
      WorkHourTypeDataService.getAll()
        .then((response: ResponseData) => {
          this.workHourTypes = response.data;
          console.log("data work" + response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveWourHourTypes();
      this.currentWorkHourType = {} as WorkHourType;
      this.currentIndex = -1;
    },

    setActiveWorkHourType(workHourType: WorkHourType, index = -1) {
      this.currentWorkHourType = workHourType;
      this.currentIndex = index;
    },

  /*
    searchTitle() {
      WorkHourTypeDataService.findByTitle(this.description)
        .then((response: ResponseData) => {
          this.workHourTypes = response.data;
          this.setActiveWorkHourType({} as WorkHourType);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveWourHourTypes();
  },
  */
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>



