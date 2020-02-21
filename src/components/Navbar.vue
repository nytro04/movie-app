<template>
  <nav id="navbar" class="navbar navbar-expand-sm mt-3">
    <router-link to="/" class="navbar-brand mr-auto">Movie App</router-link>

    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#movie-app" aria-controls="movie-app" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="movie-app">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-2">
          <router-link to="/" class="nav-link ">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/watch-list" class="nav-link">Watch List</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #474747;
}

.nav-link {
  color: #fff;
  font-weight: 300;
  font-size: 0.9rem;
  // background-color: #282128;
  padding: 0.3rem 1.7rem !important;
  border-radius: 5rem;
  border: 1px solid #474747;

  &:hover {
    background-color: #413b41;
  }
}
</style>
