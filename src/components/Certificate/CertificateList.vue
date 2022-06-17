
<template>
  <div class="list row">
 
    <div class="col-md-6">
      <!-- Btn Nuevo -->
      <router-link to="/addCertificate" class="nav-link">Nuevo</router-link>
      <!-- end -->
      <h4>Certificados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(certificate, index) in certificates"
          :key="index"
          @click="setActiveCertificate(certificate, index)"
        >
          {{ certificate.serial_number }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCertificate.id">
        <h4>Certificado</h4>
        <div>
          <label><strong>Serial Number:</strong></label>
          {{ currentCertificate.serial_number }}
        </div>
        <div>
          <label><strong>Asfi Code:</strong></label>
          {{ currentCertificate.asfi_code }}
        </div>

        <router-link
          :to="'/certificates/' + currentCertificate.id"
          class="badge badge-warning"
          >Editar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CertificateDataService from "@/services/CertificateDataService";
import Certificate from "@/types/Certificate";
import ResponseData from "@/types/ResponseData";

console.log("CertificateDataService");

export default defineComponent({
  name: "certificates-list",
  data() {
    return {
      certificates: [] as Certificate[],
      currentCertificate: {} as Certificate,
      currentIndex: -1,
      asfi_code: "",
      serial_number: ""
    };
  },
  methods: {
    retrieveCertificates() {
      CertificateDataService.getAll()
        .then((response: ResponseData) => {
          this.certificates = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCertificates();
      this.currentCertificate = {} as Certificate;
      this.currentIndex = -1;
    },

    setActiveCertificate(certificate: Certificate, index = -1) {
      this.currentCertificate = certificate;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveCertificates();
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



