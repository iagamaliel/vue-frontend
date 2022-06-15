import http from "@/http-common";

/* eslint-disable */
class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/department");
  }

  get(id: any): Promise<any> {
    return http.get(`/department/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/department", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/department`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/department/${id}`);
  }

  findByTitle(DepartmentName: string): Promise<any> {
    return http.get(`/department/department/${DepartmentName}`);
  }
}

export default new TutorialDataService();
