<template>
  <div class="edit-form">
    <h4>Ciclos</h4>
    <form>

      <div class="form-group">
        <label for="name_cycle">Ciclo</label>
        <input
          type="text"
          class="form-control"
          id="name_cycle"
          v-model="currentCertificate.name_cycle"
        />
      </div>
    </form>
    <p>{{ message }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import CycleDataService from "@/services/CycleDataService";
import Cycle from "@/types/Cycle";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "cycle",
  data() {
    return {
      currentCycle: {} as Cycle,
      message: "",
    };
  },
  methods: {
    getCycle(id: any) {
      CycleDataService.get(id)
        .then((response: ResponseData) => {
          this.currentCycle = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getCycle(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
