<template>
    <div class="task-list">
      <h2>Lista de Tareas</h2>
      
      <!-- Mensaje si no hay tareas -->
      <p v-if="tasks.length === 0">No hay tareas disponibles</p>
      
      <!-- Renderiza la lista de tareas -->
      <ul>
        <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
          <span>{{ task.title }}</span>
          
          <!-- Botón para marcar como completada o pendiente -->
          <button @click="toggleCompletion(task)">
            {{ task.completed ? "Marcar como Pendiente" : "Marcar como Completada" }}
          </button>
          
          <!-- Botón para eliminar la tarea -->
          <button @click="deleteTask(task.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import TaskService from "@/todoService"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
  
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [] // Array para almacenar la lista de tareas
      };
    },
    async mounted() {
      await this.fetchTasks(); // Llama al método para obtener tareas cuando el componente se monta
    },
    methods: {
      // Método para obtener la lista de tareas desde la API
      async fetchTasks() {
        try {
          const response = await TaskService.getTodos();
          this.tasks = response; // Asigna la lista de tareas al array tasks
        } catch (error) {
          console.error("Error al obtener tareas:", error);
        }
      },
  
      // Método para alternar el estado de completado de una tarea
      async toggleCompletion(task) {
        task.completed = !task.completed; // Alterna el estado
        try {
          await TaskService.updateTodo(task.id, task); // Actualiza la tarea en el servidor
        } catch (error) {
          console.error("Error al actualizar la tarea:", error);
        }
      },
  
      // Método para eliminar una tarea
      async deleteTask(id) {
        try {
          await TaskService.deleteTodo(id);
          this.tasks = this.tasks.filter(task => task.id !== id); // Elimina la tarea de la lista local
        } catch (error) {
          console.error("Error al eliminar la tarea:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .task-list {
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  li.completed span {
    text-decoration: line-through;
    color: #777;
  }
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  button:nth-child(2) {
    background-color: #4CAF50;
    color: white;
  }
  
  button:nth-child(3) {
    background-color: #f44336;
    color: white;
  }
  </style>
  