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

  try{
    let response = await axios.get(listUrl, {timeout : 900});
    todoList = response.data;
    for(let todo of todoList){
      response = await axios.get(todoUrlPrefix+todo.id)
      console.log(`## ${todo.id} `, response.data);
    }
    let data = {todo : "test insert todo", desc : "test insert todo desc"};
    response = await axios.post(listUrl, data);

    console.log('post insert');
    console.log(response);
  }catch(e){
    console.log(e instanceof Error)
    if(e instanceof Error)console.log(e.message);
    else console.log(e);
  }
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
