<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.app {
  font-family: "Open Sans", sans-serif !important;
  min-height: 100vh;

  color: #eee;
}

.heading {
  letter-spacing: 2px;
  text-transform: uppercase;
  &__primary {
    &-1 {
      font-size: 3rem;
      font-weight: 700;
    }
    &-2 {
      font-size: 3.5rem;
      font-weight: 700;
    }
    &-3 {
      font-size: 4rem;
      font-weight: 700;
    }
  }
  &__secondary {
    &-1 {
      font-size: 1.8rem;
    }
    &-2 {
      font-size: 2rem;
    }
    &-3 {
      font-size: 2.5rem;
    }
  }
}
</style>
