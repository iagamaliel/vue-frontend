import http from "@/http-common";

/* eslint-disable */
class CertificateDataService {
  getAll(): Promise<any> {
    return http.get("/certificate");
  }

  get(id: any): Promise<any> {
    return http.get(`/certificate/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/certificate", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/certificate`, data);
  }
}

export default new CertificateDataService();