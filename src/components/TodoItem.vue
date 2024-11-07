<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="todo-item">
        <!-- Contenedor del título y el estado de la tarea -->
        <div class="todo-content">
            <!-- Título de la tarea con estilo tachado si está completada -->
            <h5 :class="{ 'completed': completed }">
                {{ title }}
            </h5>

            <!-- Estado de la tarea (Completada o Pendiente) -->
            <span class="todo-status">
                {{ completed ? 'Completada' : 'Pendiente' }}
            </span>
        </div>

        <!-- Contenedor de botones de acción -->
        <div class="todo-actions">
            <!-- Botón para cambiar el estado de la tarea -->
            <button @click="$emit('toggle-completion')" class="btn-toggle">
                Marcar como {{ completed ? 'Pendiente' : 'Completada' }}
            </button>

            <!-- Botón para eliminar la tarea -->
            <button @click="$emit('delTodo')" class="btn-delete">
                Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
/* Estilos del componente TodoItem */
.todo-item {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
}

/* Contenedor del título y estado */
.todo-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Estilo del título, se tacha si la tarea está completada */
.completed {
    text-decoration: line-through;
    color: #777;
}

/* Estilo para el estado de la tarea */
.todo-status {
    font-weight: bold;
    color: #555;
}

/* Contenedor de los botones de acción */
.todo-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

/* Estilos de botones */
.btn-toggle {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

.btn-delete {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

/* Efectos hover para los botones */
.btn-toggle:hover {
    background-color: #45a049;
}

.btn-delete:hover {
    background-color: #e53935;
}
</style>
