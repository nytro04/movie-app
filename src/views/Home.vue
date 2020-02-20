<template>
  <div class="home">
    <app-nav-bar></app-nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    appNavBar: Navbar
  }
};
</script>

<style lang="scss" scoped>

</style>