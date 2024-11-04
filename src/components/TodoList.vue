<template>
  <div class="task-list">
    <h1>Lista de Tareas</h1>

 
    <!-- Formulario para crear nuevas tareas -->
    <form @submit.prevent="createTask">
      <div class="form-group">
        <label for="task">Nueva tarea:</label>
        <input 
          type="text" 
          v-model="newTask" 
          class="form-control" 
          placeholder="Escribe una tarea" 
        />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Agregar tarea</button>
    </form>

 

    <!-- Lista de tareas -->
    <ul class="list-group mt-3">
      <li 
        class="list-group-item d-flex justify-content-between align-items-center" 
        v-for="(task, index) in tasks" 
        :key="index"
      >
        <div>
          <input 
            type="checkbox" 
            class="me-2" 
            v-model="task.completed" 
            @change="toggleComplete(task)" 
          />
          <span :class="{ completed: task.completed }">{{ task.text }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      newTask: '',  // Variable para la nueva tarea
      tasks: []     // Array de tareas
    };
  },
  methods: {
    createTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          text: this.newTask,
          completed: false
        });
        this.newTask = ''; // Limpiar input después de añadir
      }
    },
    toggleComplete(task) {
      task.completed = !task.completed; // Cambiar estado de completada o no
    }
  }
};
</script>

 

<style scoped>
.task-list {
  max-width: 600px;
  margin: 0 auto;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>