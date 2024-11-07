<template>
  <div class="container mt-5">
    <h1>Acerca de esta Aplicación</h1>
    <p>
      Esta aplicación de gestión de tareas permite a los usuarios agregar y gestionar sus tareas diarias de forma sencilla. 
      Puedes agregar tareas manualmente o extraer tareas de una API de ejemplo para prácticas de desarrollo en Vue.js.
    </p>
    <p>
      La aplicación está construida con Vue.js y utiliza Bootstrap para un diseño responsivo y profesional. 
      Además, se implementa una SPA (Single Page Application) para mejorar la experiencia de usuario.
    </p>
    <h2>Características</h2>
    <ul>
      <li>Agregar tareas de forma manual.</li>
      <li>Extraer tareas desde una API externa.</li>
      <li>Vista combinada para gestionar ambas listas de tareas.</li>
    </ul>
    <h2>Tecnologías Utilizadas</h2>
    <ul>
      <li>Vue.js: Framework principal de la aplicación.</li>
      <li>Bootstrap: Para el diseño y la responsividad.</li>
      <li>DummyJSON API: Proveedor de datos de ejemplo para las tareas.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

