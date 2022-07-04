import axios from "axios";


class BlogDataService {
  getAll(token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.get("http://localhost:8000/api/blog/");
  }
  getOne(token, id) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.get(`http://localhost:8000/api/blog/${id}`);
  }
  createBlog(data, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.post("http://localhost:8000/api/blog/", data);
  }
  updateBlog(id, data, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(`http://localhost:8000/api/blog/${id}`, data);
  }
  deleteBlog(id, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.delete(`http://localhost:8000/api/blog/${id}`);
  }
  login(data) {
    return axios.post("http://localhost:8000/api/login/", data);
  }
  signup(data) {
    return axios.post("http://localhost:8000/api/signup-rqz/", data);
  }
  createNewsletter(data){
    axios.post("http://localhost:8000/api/newsletter/", data)
  }
}

export default new BlogDataService();