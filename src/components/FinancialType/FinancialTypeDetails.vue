<template>
  <div class="edit-form">
    <h4>Tipo Financiera</h4>
    <label class="form-control">{{ currentFinancialType.description }}</label>

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
