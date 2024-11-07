<template>
    <div class="combined-view">
      <h1>Vista Combinada de Tareas</h1>
  
      <!-- Componente para agregar tareas -->
      <AddTask @task-added="addTask" />
  
      <!-- Componente para mostrar la lista de tareas -->
      <TaskList 
        :tasks="tasks" 
        @task-updated="updateTask" 
        @task-deleted="deleteTask" 
        @task-toggle="toggleCompletion"
      />
    </div>
  </template>
  
  <script>
  import AddTask from "@/views/AddTask.vue";
  import TaskList from "@/views/TaskList.vue";
  import todoService from "@/todoService.js"; // Asegúrate de que la ruta sea correcta
  
  export default {
    name: "CombinedView",
    components: {
      AddTask,
      TaskList,
    },
    data() {
      return {
        tasks: [], // Array para almacenar la lista de tareas
      };
    },
    async mounted() {
      await this.fetchTasks(); // Carga las tareas cuando se monta el componente
    },
    methods: {
      // Método para obtener todas las tareas desde el API
      async fetchTasks() {
        try {
          const response = await todoService.getTodos();
          this.tasks = response; // Almacena las tareas en el array tasks
        } catch (error) {
          console.error("Error al cargar las tareas:", error);
        }
      },
  
      // Método para agregar una nueva tarea a la lista y al API
      async addTask(newTask) {
        try {
          const response = await todoService.createTodo(newTask);
          this.tasks.push(response); // Agrega la nueva tarea a la lista local
        } catch (error) {
          console.error("Error al agregar la tarea:", error);
        }
      },
  
      // Método para actualizar una tarea existente en la lista y en el API
      async updateTask(updatedTask) {
        try {
          await todoService.updateTodo(updatedTask.id, updatedTask);
          // Encuentra y reemplaza la tarea actualizada en la lista local
          const index = this.tasks.findIndex(task => task.id === updatedTask.id);
          if (index !== -1) {
            this.$set(this.tasks, index, updatedTask);
          }
        } catch (error) {
          console.error("Error al actualizar la tarea:", error);
        }
      },
  
      // Método para eliminar una tarea de la lista y del API
      async deleteTask(taskId) {
        try {
          await todoService.deleteTodo(taskId);
          this.tasks = this.tasks.filter(task => task.id !== taskId); // Elimina la tarea localmente
        } catch (error) {
          console.error("Error al eliminar la tarea:", error);
        }
      },
  
      // Método para alternar el estado de completado de una tarea
      async toggleCompletion(task) {
        try {
          task.completed = !task.completed;
          await todoService.updateTodo(task.id, task); // Actualiza en el API
          const index = this.tasks.findIndex(t => t.id === task.id);
          if (index !== -1) {
            this.$set(this.tasks, index, task); // Actualiza la tarea en la lista local
          }
        } catch (error) {
          console.error("Error al alternar el estado de la tarea:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .combined-view {
    padding: 20px;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  </style>
  