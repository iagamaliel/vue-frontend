import http from "@/http-common";

/* eslint-disable */
class CycleDataService {
  getAll(): Promise<any> {
    return http.get("/cycle");
  }

  get(id: any): Promise<any> {
    return http.get(`/cycle/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/cycle", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/cycle`, data);
  }
}

export default new CycleDataService();