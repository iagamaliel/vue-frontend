<template>
  <div class="submit-form">
    <div v-if="!submitted">


      <div class="form-group">
        <label for="description">Descripción</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="financialType.description"
          name="description"
        />
      </div>

      <button @click="saveFinancialType" class="btn btn-success">Guardar</button>
    </div>

    <div v-else>
      <h4>¡Lo enviaste con éxito!</h4>
      <button class="btn btn-success" @click="newFinancialType">Nuevo</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FinancialTypeDataService from "@/services/FinancialTypeDataService";
import FinancialType from "@/types/FinancialType";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-financialType",
  data() {
    return {
      financialType: {
        id: null,
        description: ""
      } as FinancialType,
      submitted: false,
    };
  },
  methods: {
    saveFinancialType() {
      let data = {
        description: this.financialType.description,
      };

      FinancialTypeDataService.create(data)
        .then((response: ResponseData) => {
          this.financialType.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newFinancialType() {
      this.submitted = false;
      this.financialType = {} as FinancialType;
    },
  },
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
