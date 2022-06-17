<template>
  <div class="submit-form">
    <div v-if="!submitted">


      <div class="form-group">
        <label for="asfi_code">Asfi Code</label>
        <input
          class="form-control"
          id="asfi_code"
          required
          v-model="certificate.asfi_code"
          name="asfi_code"
        />
      </div>

      <div class="form-group">
        <label for="serial_number">Serial Number</label>
        <input
          class="form-control"
          id="serial_number"
          required
          v-model="certificate.serial_number"
          name="serial_number"
        />
      </div>

     <div class="form-group">
        <input
          type="checkbox"
          id="certificate"
          required
          v-model="certificate.certificate"
          name="certificate"
        />
        <label for="certificate"> Activo</label>
      </div>

      <div class="form-group">
        <label for="certificate"> Fecha Validación</label>
        <input
          class="form-control"
          type="date"
          id="certificate"
          required
          v-model="certificate.certificate"
          name="certificate"
        />
      </div>

      <button @click="saveCertificate" class="btn btn-success">Guardar</button>
    </div>

    <div v-else>
      <h4>¡Lo enviaste con éxito!</h4>
      <button class="btn btn-success" @click="newCertificate">Nuevo</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CertificateDataService from "@/services/CertificateDataService";
import Certificate from "@/types/Certificate";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-certificate",
  data() {
    return {
      certificate: {
        id: null,
        asfi_code: "",
        serial_number: "",
        certificate: false
      } as Certificate,
      submitted: false,
    };
  },
  methods: {
    saveCertificate() {
      let data = {
        asfi_code: this.certificate.asfi_code,
        serial_number: this.certificate.serial_number,
        certificate: this.certificate.certificate
      };

      CertificateDataService.create(data)
        .then((response: ResponseData) => {
          this.certificate.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newCertificate() {
      this.submitted = false;
      this.certificate = {} as Certificate;
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
