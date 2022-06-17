<template>
  <div class="submit-form">
    <div v-if="!submitted">


      <div class="form-group">
        <label for="asfi_code">Asfi Code</label>
        <input
          class="form-control"
          id="asfi_code"
          required
          v-model="cycle.asfi_code"
          name="asfi_code"
        />
      </div>

      <div class="form-group">
        <label for="serial_cycle">Serial Number</label>
        <input
          class="form-control"
          id="serial_cycle"
          required
          v-model="cycle.serial_cycle"
          name="serial_cycle"
        />
      </div>

      <div class="form-group">
        <label for="name_cycle">Nombre</label>
        <input
          class="form-control"
          id="name_cycle"
          required
          v-model="cycle.name_cycle"
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
          v-model="cycle.created_date"
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
          v-model="cycle.end_date"
          name="end_date"
        />
      </div>

     <div class="form-group">
        <input
          type="checkbox"
          id="Inactivate"
          required
          v-model="cycle.Inactivate"
          name="Inactivate"
        />
        <label for="Inactivate"> Activo</label>
      </div>

      <button @click="saveCycle" class="btn btn-success">Guardar</button>
    </div>

    <div v-else>
      <h4>¡Lo enviaste con éxito!</h4>
      <button class="btn btn-success" @click="newCycle">Nuevo</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CycleDataService from "@/services/CycleDataService";
import Cycle from "@/types/Cycle";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-cycle",
  data() {
    return {
      cycle: {
        id: null,
        asfi_code: "",
        serial_cycle: "",
        Inactivate: false
      } as Cycle,
      submitted: false,
    };
  },
  methods: {
    saveCycle() {
      let data = {
        asfi_code: this.cycle.asfi_code,
        serial_cycle: this.cycle.serial_cycle,
        name_cycle: this.cycle.name_cycle
      };

      CycleDataService.create(data)
        .then((response: ResponseData) => {
          this.cycle.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newCycle() {
      this.submitted = false;
      this.cycle = {} as Cycle;
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
