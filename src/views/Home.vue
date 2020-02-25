<template>
  <div class="home">
    <app-header></app-header>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    appHeader: HeaderVue
  }
};
</script>

<style lang="scss" scoped></style>
