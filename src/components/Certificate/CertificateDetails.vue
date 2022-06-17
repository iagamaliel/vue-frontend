<template>
  <div class="edit-form">
    <h4>Certificado</h4>
    <form>

      <div class="form-group">
        <label for="asfi_code">asfi code</label>
        <input
          type="text"
          class="form-control"
          id="asfi_code"
          v-model="currentCertificate.asfi_code"
        />
      </div>
    </form>
    <p>{{ message }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import CertificateDataService from "@/services/CertificateDataService";
import Certificate from "@/types/Certificate";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "certificate",
  data() {
    return {
      currentCertificate: {} as Certificate,
      message: "",
    };
  },
  methods: {
    getCertificate(id: any) {
      CertificateDataService.get(id)
        .then((response: ResponseData) => {
          this.currentCertificate = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getCertificate(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
