<template>
  <div class="home">
    <app-header></app-header>
    <app-movies-list :movieList="movies"></app-movies-list>
  </div>
</template>

<script>
import axios from "axios";

import HeaderVue from "../components/Header.vue";
import MoviesListVue from "../components/MoviesList.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    appHeader: HeaderVue,
    appMoviesList: MoviesListVue
  },
  data() {
    return {
      movies: []
      // api_key: process.env.VUE_APP_MOVIE_DB_API_KEY
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const baseUrl = "https://api.themoviedb.org/3/movie";
      // const url = "https://api.themoviedb.org/3/movie/popular?api_key=77d76b97b95d4571e032dc8271077f7b&language=en-US&page=1";

      try {
        const res = await axios.get(`${baseUrl}/popular`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG,
            page: 1
          }
        });

        this.movies = res.data.results;

        // console.log(res);
        console.log(this.movies);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
