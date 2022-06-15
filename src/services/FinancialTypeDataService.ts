import http from "@/http-common";

/* eslint-disable */
class FinancialTypeDataService {
  getAll(): Promise<any> {
    return http.get("/FinancialType");
  }

  get(id: any): Promise<any> {
    return http.get(`/FinancialType/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/FinancialType", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/FinancialType`, data);
  }
}

export default new FinancialTypeDataService();