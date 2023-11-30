<template>
  <div>
    <h2>콘솔 확인</h2>
  </div>
</template>

<script setup>
import axios from "axios"

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestApi = async () => {
  let todoList = [];
  const response = await axios.get(listUrl);
  todoList = response.data;
  console.log('# TodoList : ', todoList);
  let todo = await axios.get(todoUrlPrefix+todoList[0].id).data;
  console.log("## 첫번째 Todo", todo);
  todo = await axios.get(todoUrlPrefix+todoList[1].id).data;
  console.log("## 두번째 Todo", todo);
}

requestApi();
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
