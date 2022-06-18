<template>
  <div class="list row">
    <div class="col-md-6">
      <!-- Btn Nuevo -->
      <router-link to="/addChannels" class="nav-link">Nuevo</router-link>
      <!-- end -->
      <h4>Canales</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(channel, index) in channels"
          :key="index"
          @click="setActiveChannel(channel, index)"
        >
          {{ channel.Name_Channel }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentChannel.id">
        <h4>Canal</h4>
        <div>
          <label><strong>Nombre:</strong></label>
          {{ currentChannel.Name_Channel }}
        </div>

        <router-link
          :to="'/channels/' + currentChannel.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChannelDataService from "@/services/ChannelsDataService";
import Channel from "@/types/Channel";
import ResponseData from "@/types/ResponseData";

console.log("ChannelDataService");

export default defineComponent({
  name: "Channel-list",
  data() {
    return {
      channels: [] as Channel[],
      currentChannel: {} as Channel,
      currentIndex: -1,
      description: ""
    };
  },
  methods: {
    retrieveChannels() {
      ChannelDataService.getAll()
        .then((response: ResponseData) => {
          this.channels = response.data;
          console.log("data financial" + response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveChannels();
      this.currentChannel = {} as Channel;
      this.currentIndex = -1;
    },

    setActiveChannel(channel: Channel, index = -1) {
      this.currentChannel = channel;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveChannels();
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
