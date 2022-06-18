<template>
  <div class="submit-form">
    <div v-if="!submitted">


      <div class="form-group">
        <label for="asfi_code">Código</label>
        <input
          class="form-control"
          id="asfi_code"
          required
          v-model="channel.asfi_code"
          name="asfi_code"
        />
      </div>
        <div class="form-group">
        <label for="serial_Channel">Serial</label>
        <input
          class="form-control"
          id="serial_Channel"
          required
          v-model="channel.serial_Channel"
          name="serial_Channel"
        />
      </div>
      <div class="form-group">
        <label for="Name_Channel">Nombre</label>
        <input
          class="form-control"
          id="Name_Channel"
          required
          v-model="channel.Name_Channel"
          name="Name_Channel"
        />
      </div>
        <div class="form-group">
        <label for="created_date">Fecha de Creación</label>
        <input
          type="date"
          class="form-control"
          id="created_date"
          required
          v-model="channel.created_date"
          name="created_date"
        />
      </div>
         <div class="form-group">

        <input
          type="checkbox"
          id="Inactivate"
          required
          v-model="channel.Inactivate"
          name="Inactivate"
        />
        <label for="Inactivate">Inactivo</label>
      </div>


      <button @click="saveChannel" class="btn btn-success">Guardar</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newChannel">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChannelsDataService from "@/services/ChannelsDataService";
import Channel from "@/types/Channel";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-channel",
  data() {
    return {
      channel: {
          id: null,
          asfi_code: "",
          serial_Channel: "",
          Name_Channel: "",
          created_date: new Date(),
          Inactivate: false
      } as Channel,
      submitted: false,
    };
  },
  methods: {
    saveChannel() {
      let data = {
        Name_Channel: this.channel.Name_Channel,
      };

      ChannelsDataService.create(data)
        .then((response: ResponseData) => {
          this.channel.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newChannel() {
      this.submitted = false;
      this.channel = {} as Channel;
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
