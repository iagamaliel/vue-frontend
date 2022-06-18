<template>
  <div class="edit-form">
    <h4>Canal</h4>
    <form>

      <div class="form-group">
        <label for="Name_Channel">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="Name_Channel"
          v-model="currentChannel.Name_Channel"
        />
      </div>
    </form>

    <button type="submit" class="badge badge-success" @click="updateChannel">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChannelDataService from "@/services/ChannelsDataService";
import Channel from "@/types/Channel";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "channels",
  data() {
    return {
      currentChannel: {} as Channel,
      message: "",
    };
  },
  methods: {
    getChannel(id: any) {
      ChannelDataService.get(id)
        .then((response: ResponseData) => {
          this.currentChannel = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },


    updateChannel() {
      ChannelDataService.update(this.currentChannel)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The channel was updated successfully!";
            this.$router.push({ name: "channels" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getChannel(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
