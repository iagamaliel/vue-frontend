import http from "@/http-common";

/* eslint-disable */
class FinancialTypeDataService {
  getAll(): Promise<any> {
    return http.get("/financialtype");
  }

  get(id: any): Promise<any> {
    return http.get(`/financialtype/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/financialtype", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/financialtype`, data);
  }
}

export default new FinancialTypeDataService();