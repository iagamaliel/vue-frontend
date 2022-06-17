
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
      <h4>Tipos Financiera</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(financialType, index) in financialTypes"
          :key="index"
          @click="setActiveFinancialType(financialType, index)"
        >
          {{ financialType.description }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentFinancialType.id">
        <h4>Tipo de Horarios</h4>
        <div>
          <label><strong>Descripción:</strong></label>
          {{ currentFinancialType.description }}
        </div>

        <router-link
          :to="'/financialtypes/' + currentFinancialType.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FinancialTypeDataService from "@/services/FinancialTypeDataService";
import FinancialType from "@/types/FinancialType";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "FinancialType-list",
  data() {
    return {
      financialTypes: [] as FinancialType[],
      currentFinancialType: {} as FinancialType,
      currentIndex: -1,
      description: ""
    };
  },
  methods: {
    retrieveFinancialTypes() {
      FinancialTypeDataService.getAll()
        .then((response: ResponseData) => {
          this.financialTypes = response.data;
          console.log("data financial" + response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFinancialTypes();
      this.currentFinancialType = {} as FinancialType;
      this.currentIndex = -1;
    },

    setActiveFinancialType(financialType: FinancialType, index = -1) {
      this.currentFinancialType = financialType;
      this.currentIndex = index;
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



