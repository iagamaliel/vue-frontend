import http from "@/http-common";

/* eslint-disable */
class FinancialEntityDataService {
  getAll(): Promise<any> {
    return http.get("/financialentity");
  }

  get(id: any): Promise<any> {
    return http.get(`/financialentity/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/financialentity", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/financialentity`, data);
  }
}

export default new FinancialEntityDataService();