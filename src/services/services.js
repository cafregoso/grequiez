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
    axios.defaults.headers.post['Content-Type'] = "multipart/form-data";
    let new_data = new FormData()
    console.log(data)
    if (data.image1)
      new_data.append("image1", data.image1, data.image1.name)
    
    if (data.image2)
      new_data.append("image2", data.image2, data.image2.name)
      new_data.append('title', data.title)
      new_data.append('content1', data.content1)
      new_data.append('content2', data.content2)
      new_data.append('content3', data.content3)
      new_data.append('resume', data.resume)
      new_data.append('principal_image', data.principal_image, data.principal_image.name)
      new_data.append('user', localStorage.getItem('user'))
      console.log(new_data)
    return axios.post("http://localhost:8000/api/blog/", new_data);
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
  sendEmail(data){
    axios.post("http://localhost:8000/api/sendmail/", data)
    .then(response => {
      if (response.status === 200) {
        return response.data
      }
      else {
        console.log(response.data)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default new BlogDataService();
