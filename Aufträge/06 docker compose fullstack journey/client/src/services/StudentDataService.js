import http from "../http_common.js";

class StudentDataService {
  getAll() {
    return http.get("/student");
  }

  get(id) {
    return http.get(`/student/${id}`);
  }

  create(data) {
    return http.post("/student", data);
  }

  update(id, data) {
    return http.put(`/student/${id}`, data);
  }

  delete(id) {
    return http.delete(`/student/${id}`);
  }

  deleteAll() {
    return http.delete(`/student`);
  }

  findByTitle(name) {
    return http.get(`/student?title=${name}`);
  }
}

export default new StudentDataService();