<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
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