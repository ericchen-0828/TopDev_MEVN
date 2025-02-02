<template>
  <div>
    <h2>Add Todo</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Enter a new todo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    async addTodo() {
      if (this.newTodo.trim()) {
        try {
          const response = await axios.post("http://localhost:5000/api/todos", {
            title: this.newTodo
          });
          this.$emit("todo-added", response.data);
          this.newTodo = "";
        } catch (error) {
          console.error("Error adding todo:", error);
        }
      }
    }
  }
};
</script>
