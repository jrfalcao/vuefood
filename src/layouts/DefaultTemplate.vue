<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Products' }">Loja</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">Sobre</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {};
</script>

<style scoped>
@import url("../assets/css/vuefood.css");
@import url("../assets/css/reset.css");
</style>