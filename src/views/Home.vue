<template>
  <div class="home">
    <app-header></app-header>
    <app-movies-list :movieList="movies" @popularCategory="updateCategory" @topRatedCategory="updateCategory" @upcomingCategory="updateCategory"></app-movies-list>
    <!-- <app-movies-list :categoryName="category" :movieList="movies" @popularCategory="category = $event" @nowPlayingCategory="category = $event" @topRatedCategory="category = $event" @upcomingCategory="category = $event"></app-movies-list> -->
    <app-movies-list :movieList="tvSeries" @popularCategory="updateCategory" @topRatedCategory="updateCategory" @upcomingCategory="updateCategory"></app-movies-list>
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
      category: "popular",
      movies: [],
      tvSeries: []
    };
  },

  created() {
    this.fetchMovies();
    this.fetchTvMovies();
    this.updateCategory();
    // console.log(this.category);
  },
  methods: {
    updateCategory(category) {
      this.category = category;
      this.fetchMovies();
      this.fetchTvMovies();
    },
    async fetchMovies() {
      const baseUrl = "https://api.themoviedb.org/3/movie";
      // const url = "https://api.themoviedb.org/3/movie/popular?api_key=77d76b97b95d4571e032dc8271077f7b&language=en-US&page=1";

      console.log(this.category);

      try {
        const res = await axios.get(`${baseUrl}/${this.category}`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG,
            page: 1
          }
        });

        this.movies = res.data.results;

        console.log(res);
        // console.log(this.movies);
      } catch (error) {
        console.log(error);
      }
    },

    // APIS Endpoint Movies

    // https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
    // https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
    //  https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
    // https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

    // APIS Endpoint TV series

    // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
    // https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1
    // https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US

    async fetchTvMovies() {
      const baseUrl = "https://api.themoviedb.org/3/tv";
      // const url = "https://api.themoviedb.org/3/movie/popular?api_key=77d76b97b95d4571e032dc8271077f7b&language=en-US&page=1";

      try {
        const res = await axios.get(`${baseUrl}/${this.category}`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG,
            page: 1
          }
        });

        this.tvSeries = res.data.results;

        // console.log(res);
        // console.log(this.movies);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
