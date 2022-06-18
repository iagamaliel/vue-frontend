import http from "@/http-common";

/* eslint-disable */
class ChannelsDataService {
  getAll(): Promise<any> {
    return http.get("/channels");
  }

  get(id: any): Promise<any> {
    return http.get(`/channels/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/channels", data);
  }

  update(data: any): Promise<any> {
    return http.put(`/channels`, data);
  }
}

export default new ChannelsDataService();