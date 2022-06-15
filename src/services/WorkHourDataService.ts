import http from "@/http-common";

/* eslint-disable */
class WorkHourDataService {
  getAll(): Promise<any> {
    return http.get("/workhour");
  }

  get(id: any): Promise<any> {
    return http.get(`/workhour/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/workhour", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/workhour`, data);
  }
}

export default new WorkHourDataService();