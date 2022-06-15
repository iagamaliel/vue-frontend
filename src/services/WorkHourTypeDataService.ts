import http from "@/http-common";

/* eslint-disable */
class WorkHourTypeDataService {
  getAll(): Promise<any> {
    return http.get("/workhourtype");
  }

  get(id: any): Promise<any> {
    return http.get(`/workhourtype/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/workhourtype", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/workhourtype`, data);
  }
}

export default new WorkHourTypeDataService();