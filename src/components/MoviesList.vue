<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="movie in movieList" :key="movie.id">
          <img :src="movie.poster_path" alt="" class="img-fluid" />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieList: {
      type: Array,
      required: true
    }
  },
  name: "MoviesList"
};
</script>

<style lang="scss" scoped>
.list {
  min-height: 100vh;
  background-color: #282128;
  color: #fff;
}
</style>
