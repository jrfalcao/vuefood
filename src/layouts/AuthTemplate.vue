<template>
  <div>
    <!-- Page Content -->
    <div class="container container-body">
      <router-view></router-view>
    </div>
    <!-- / Container -->
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import FooterComponent from "./_partials/footer";

export default {
  components: {
    // FooterComponent,
  },
};
</script>

<style scoped>
@import url("../assets/css/auth.css");
</style>
