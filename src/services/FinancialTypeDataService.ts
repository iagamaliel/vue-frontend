import http from "@/http-common";

/* eslint-disable */
class FinancialTypeDataService {
  getAll(): Promise<any> {
    return http.get("/FinancialType/ListFinancialType");
  }

  get(id: any): Promise<any> {
    return http.get(`/FinancialType/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/FinancialType/CreateFinancialType", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/FinancialType/ModifyFinancialType`, data);
  }
}

export default new FinancialTypeDataService();