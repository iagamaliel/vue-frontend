import http from "@/http-common";

/* eslint-disable */
class ClearingHouseDataService {
  getAll(): Promise<any> {
    return http.get("/clearinghouse");
  }

  get(id: any): Promise<any> {
    return http.get(`/clearinghouse/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/clearinghouse", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/clearinghouse`, data);
  }
}

export default new ClearingHouseDataService();