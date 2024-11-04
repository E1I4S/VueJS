import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

export default {
  getTodos() {
    return axios.get(API_URL);
  },
  getTodo(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  createTodo(todo) {
    return axios.post(API_URL, todo);
  },
  updateTodo(id, todo) {
    return axios.put(`${API_URL}/${id}`, todo);
  },
  deleteTodo(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};

 