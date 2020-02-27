<template>
  <nav id="navbar" class="navbar navbar-expand-sm  mt-3">
    <router-link to="/" class="navbar-brand mr-auto text-white">Movie App</router-link>

    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#movie-app" aria-controls="movie-app" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="movie-app">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mr-4">
          <router-link to="/" class="nav-link ">Movies</router-link>
        </li>
        <li class="nav-item mr-4">
          <router-link to="/" class="nav-link ">TV Series</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/watch-list" class="nav-link">Watch List</router-link>
        </li>
      </ul>

      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-sm btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form> -->

      <form>
        <input type="text" class="search" placeholder="search..." />
      </form>
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
  overflow: hidden;
}

.nav-link {
  color: #fff;
  font-weight: 300;
  font-size: 0.9rem;
  // background-color: #282128;
  padding: 0.3rem 1.7rem !important;
  border-radius: 5rem;
  border: 1px solid #fff;
  transition: all 0.2s;

  overflow: hidden;

  &:hover {
    background-color: transparent;
    transform: translateY(-0.3rem);
    // background-color: #413b41;
  }
}
.search {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5rem;
  padding: 0.1rem 0.8rem;
}
</style>
