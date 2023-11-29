<template>
  <div>
    <h2>콘솔 확인</h2>
  </div>
</template>

<script setup>
import axios from "axios"

const requestApi = () => {
  const url = "/api/todolist/gdhong";
  axios.get(url).then((response) => {
    console.log("# 응답객체 : ", response);
  });
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
