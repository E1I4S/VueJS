<template>
    <div>
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks">Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">
                <div>
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                    <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                    <button @click="toggleTaskCompletion(task)">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
            try {
                const response = await axios.get("https://dummyjson.com/todos");
                this.tasks = response.data.todos; // Asignar la lista de tareas desde la respuesta
            } catch (error) {
                console.error("Error al obtener las tareas:", error);
            }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
    // Llamada al método fetchTasks al crear el componente para obtener la lista inicial de tareas
    created() {
        this.fetchTasks();
    },
};
</script>

<script>import todoService from "@/services/todoService";

export default {
  data() {
    return {
      todos: []
    };
  },
  async created() {
    try {
      const response = await todoService.getTodos();
      this.todos = response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }
};</script>
<style scoped>
/* Aquí pueden experimentar con estilos de tu preferencia */
.task-list-container {
    max-width: 600px;
    margin: auto;
}
.task-list {
    margin-top: 1em;
}
.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: #f9f9f9;
    margin-bottom: 0.5em;
    border-radius: 4px;
}
.completed {
    text-decoration: line-through;
    color: gray;
}
</style>