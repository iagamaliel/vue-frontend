import http from "@/http-common";

/* eslint-disable */
class ClearingHouseFinancialEntityDataService {
  getAll(): Promise<any> {
    return http.get("/clearinghousefinancial");
  }

  get(id: any): Promise<any> {
    return http.get(`/clearinghousefinancial/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/clearinghousefinancial", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/clearinghousefinancial`, data);
  }
}

export default new ClearingHouseFinancialEntityDataService();