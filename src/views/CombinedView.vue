<template>
    <div>
        <h1>Lista de Tareas</h1>
        <!-- Esta seccion es una combinación de las dos vistas anteriores -->
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

        <!-- Lista de tareas con opciones para completar o eliminar -->
        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
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
   // Esta sección debe permitir agregar tareas nuevas a la vez que extraer las tareas anteriores de la API
   import todoService from "@/services/todoService";

export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
            tasks: [],   // Lista de tareas obtenida de la API
        };
    },
    methods: {
        // Método para obtener la lista de tareas de la API al cargar el componente
        async fetchTasks() {
            try {
                const response = await todoService.getTodos();
                this.tasks = response.data;
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        },

        // Método para añadir una nueva tarea tanto a la lista local como a la API
        async addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
            };

            try {
                const response = await todoService.addTodo(newTask);
                this.tasks.unshift(response.data); // Añadir la tarea de la respuesta de la API
                this.newTask = ""; // Limpiar el campo de entrada
            } catch (error) {
                console.error("Error adding task:", error);
            }
        },

        // Método para eliminar una tarea en la lista local y en la API
        async deleteTask(task) {
            try {
                await todoService.deleteTodo(task.id);
                this.tasks = this.tasks.filter((t) => t.id !== task.id);
            } catch (error) {
                console.error("Error deleting task:", error);
            }
        },

        // Método para alternar el estado de completado de una tarea
        async toggleTaskCompletion(task) {
            task.completed = !task.completed;
            try {
                await todoService.updateTodo(task.id, { completed: task.completed });
            } catch (error) {
                console.error("Error updating task:", error);
            }
        },
    },

    // Llamada al método fetchTasks al crear el componente para obtener la lista inicial de tareas
    async created() {
        await this.fetchTasks();
    }
};
</script>

<style scoped>
/* Aquí pueden agregar estilos personalizados para el componente. */
.add-task-container {
    max-width: 600px;
    margin: auto;
}
.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 1em;
}
.task-input {
    flex: 1;
    padding: 0.5em;
}
.add-button {
    padding: 0.5em 1em;
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