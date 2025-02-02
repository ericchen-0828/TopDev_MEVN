<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)" />
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button @click="deleteTodo(todo._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:5000/api/todos");
        this.todos = response.data;
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
    async updateTodo(todo) {
      try {
        await axios.patch(`http://localhost:5000/api/todos/${todo._id}`, {
          completed: todo.completed
        });
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        this.todos = this.todos.filter(todo => todo._id !== id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
