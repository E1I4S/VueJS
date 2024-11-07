<template>
    <div class="add-task">
      <h3>Agregar Tarea</h3>
      <form @submit.prevent>
        <!-- Campo para el título de la tarea -->
        <input
          v-model="task.title"
          @input="guardarTarea"
          type="text"
          placeholder="Título de la tarea"
          required
        />
  
        <!-- Campo para la descripción de la tarea -->
        <textarea
          v-model="task.description"
          @input="guardarTarea"
          placeholder="Descripción de la tarea"
        ></textarea>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AgregarTarea',
    data() {
      return {
        task: {
          title: '',
          description: '',
        },
      };
    },
    watch: {
      // Observa cambios en el título o la descripción y envía la tarea automáticamente
      task: {
        deep: true,
        handler() {
          this.guardarTarea();
        },
      },
    },
    methods: {
      async guardarTarea() {
        // Verifica que el título no esté vacío antes de hacer la solicitud
        if (!this.task.title.trim()) return;
  
        try {
          // Realiza la llamada POST al API con la tarea
          await axios.post('https://api.dummyjson.com/todos', {
            title: this.task.title,
            description: this.task.description,
          });
          console.log('Tarea guardada automáticamente');
        } catch (error) {
          console.error('Error al guardar la tarea:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario de agregar tareas */
  .add-task {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>
  