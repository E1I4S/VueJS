<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Gestor de Tareas</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/HomeView" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/AddTask" class="nav-link">Agregar Tarea</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/TaskList" class="nav-link">Lista de tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/CombinedView" class="nav-link">Vista Combinada</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/AboutView" class="nav-link">Acerca de</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view> <!-- Renderizado dinámico de las rutas -->
  </div>
</template>
