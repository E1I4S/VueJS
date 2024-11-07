import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

export default {
  async getTodos() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Retorna solo los datos necesarios
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      throw error; // Lanza el error para que el componente lo maneje si es necesario
    }
  },

  async getTodo(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la tarea con id ${id}:`, error);
      throw error;
    }
  },

  async createTodo(todo) {
    try {
      const response = await axios.post(API_URL, todo);
      return response.data;
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      throw error;
    }
  },

  async updateTodo(id, todo) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, todo);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar la tarea con id ${id}:`, error);
      throw error;
    }
  },

  async deleteTodo(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar la tarea con id ${id}:`, error);
      throw error;
    }
  }
};

 