<template>
  <div class="edit-form">
     <h4>Ciclos</h4>
    <form>

       <div class="form-group">
        <label for="asfi_code">Asfi Code</label>
        <input
          class="form-control"
          id="asfi_code"
          required
          v-model="currentCycle.asfi_code"
          name="asfi_code"
        />
      </div>

      <div class="form-group">
        <label for="serial_cycle">Serial Number</label>
        <input
          class="form-control"
          id="serial_cycle"
          required
          v-model="currentCycle.serial_cycle"
          name="serial_cycle"
        />
      </div>

      <div class="form-group">
        <label for="name_cycle">Nombre</label>
        <input
          class="form-control"
          id="name_cycle"
          required
          v-model="currentCycle.name_cycle"
          name="name_cycle"
        />
      </div>

      <div class="form-group">
        <label for="created_date"> Fecha Inicio</label>
        <input
          class="form-control"
          type="date"
          id="created_date"
          required
          v-model="currentCycle.created_date"
          name="created_date"
        />
      </div>

      <div class="form-group">
        <label for="end_date"> Fecha Final</label>
        <input
          class="form-control"
          type="date"
          id="end_date"
          required
          v-model="currentCycle.end_date"
          name="end_date"
        />
      </div>

     <div class="form-group">
        <input
          type="checkbox"
          id="Inactivate"
          required
          v-model="currentCycle.Inactivate"
          name="Inactivate"
        />
        <label for="Inactivate"> Activo</label>
      </div>
    </form>

    <button type="submit" class="badge badge-success" @click="updateCycle">
      Actualizar
    </button>

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
    updateCycle() {
      CycleDataService.update(this.currentCycle)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "¡El ciclo se actualizó con éxito!";
            this.$router.push({ name: "cycles" });
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
