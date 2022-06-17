<template>
  <div class="edit-form">
    <h4>Tutorial</h4>
    <form>

      <div class="form-group">
        <label for="description">Descripción</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentFinancialType.description"
        />
      </div>
    </form>

    <button type="submit" class="badge badge-success" @click="updateFinancialType">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import FinancialTypeDataService from "@/services/FinancialTypeDataService";
import FinancialType from "@/types/FinancialType";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "financial-Type",
  data() {
    return {
      currentFinancialType: {} as FinancialType,
      message: "",
    };
  },
  methods: {
    getFinancialType(id: any) {
      FinancialTypeDataService.get(id)
        .then((response: ResponseData) => {
          this.currentFinancialType = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    updateFinancialType() {
    FinancialTypeDataService.update(this.currentFinancialType)
      .then((response: ResponseData) => {
        console.log(response.data);
        this.message = "El tipo de financiera se actualizó con éxito.!";
          this.$router.push({ name: "financialTypes" });
      })
      .catch((e: Error) => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.message = "";
    this.getFinancialType(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
