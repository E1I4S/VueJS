import { createApp } from 'vue'  // Importa createApp desde 'vue'
import App from './App.vue'
import router from './router'
// Importa Bootstrap CSS y los íconos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)  // Crea la instancia de la aplicación

app.use(router)  // Usa el enrutador
app.mount('#app')  // Monta la aplicación en el elemento con id 'app'
