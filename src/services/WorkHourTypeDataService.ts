import http from "@/http-common";

/* eslint-disable */
class WorkHourTypeDataService {
  getAll(): Promise<any> {
    return http.get("/WorkHourType");
  }

  get(id: any): Promise<any> {
    return http.get(`/WorkHourType/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/WorkHourType", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/WorkHourType`, data);
  }
}

export default new WorkHourTypeDataService();