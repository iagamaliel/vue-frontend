<template>
  <div class="edit-form">
    <h4>Tutorial</h4>
    <form>

      <div class="form-group">
        <label for="DepartmentName">Description</label>
        <input
          type="text"
          class="form-control"
          id="DepartmentName"
          v-model="currentTutorial.DepartmentName"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "tutorial",
  data() {
    return {
      currentTutorial: {} as Tutorial,
      message: "",
    };
  },
  methods: {
    getTutorial(DepartmentId: any) {
      TutorialDataService.get(DepartmentId)
        .then((response: ResponseData) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },


    updateTutorial() {
      TutorialDataService.update(this.currentTutorial)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The tutorial was updated successfully!";
            this.$router.push({ name: "tutorials" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.DepartmentId)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.DepartmentId);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
