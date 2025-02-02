<template>
  <div id="app">
    <h1>MEVN Todo App</h1>
    <TodoForm @todo-added="addTodo" />
    <TodoList :key="updateKey" ref="todoList" />
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      updateKey: 0
    };
  },
  methods: {
    addTodo(todo) {
      this.$refs.todoList.todos.push(todo);
    }
  }
};
</script>
