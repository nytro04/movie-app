<template>
  <div class="details">
    <app-navbar></app-navbar>
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="heading heading__primary-1 my-3">{{ movie.title }}</h2>
        <div class="social">
          <span> <i class="fab fa-twitter mr-3"></i></span>
          <span> <i class="fab fa-instagram mr-3"></i></span>
          <span> <i class="fab fa-facebook"></i></span>
        </div>
      </div>
      <!-- <div> <i class="fas fa-film mr-2 pb-3"></i>DRAMA | ACTION </div>
      <p class="test">English | Hindi | French</p> -->
      <!-- <p>A</p> -->
      <div class="row py-3">
        <div class="col-md-4">
          <div>
            <i class="fas fa-film mr-3 pb-3 text-warning"></i>
            <span v-for="genre in movie.genres" :key="genre.id" class="mr-3">
              {{ genre.name }}
            </span>
          </div>
          <p v-for="language in movie.spoken_languages" :key="language.iso_639_1">
            <i class="fas fa-microphone-alt mr-4 text-warning"></i>
            {{ language.name }}
          </p>
          <h5 class=" mt-4 mb-3 text-warning">Summary</h5>
          <p class="test">
            <!-- <i class="far fa-comment-alt mr-5"></i> -->
            {{ movie.overview }}
          </p>

          <!-- <div class="d-flex justify-content-start"> -->
          <p class="mr-4 text-info">{{ movie.tagline }}</p>
          <!-- <p>Rian Johnson</p> -->
          <!-- </div> -->
          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Star Cast</p>
            <p>Rian Johnson | Dwenye John | james Bond</p>
          </div>
          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Director</p>
            <p>Rian Johnson</p>
          </div>
          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Release</p>
            <p>5th March 2019</p>
          </div>
          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Duration</p>
            <p>2h 32mins</p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4">videos</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "MovieDetails",
  components: {
    AppNavbar: NavbarVue
  },
  data() {
    return {
      // moviedId: "" * 1,
      movie: {}
    };
  },

  created() {
    this.fetchMovie();
  },

  methods: {
    async fetchMovie() {
      //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
      const baseUrl = `https://api.themoviedb.org/3/movie`;

      const { id } = this.$route.params;

      // this.moviedId = id;

      // console.log(typeof id, id);
      try {
        const res = await axios.get(`${baseUrl}/${id}`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG
          }
        });

        this.movie = res.data;

        console.log(this.movie);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  min-height: 100vh;
  background-color: #282128;
  color: #ddd;

  .test {
    display: inline-block;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 1.4rem 0;
    // padding-top: 1rem;
    // padding-top: 1rem;
    // margin: 0 20rem;
    // width: 50%;
  }
}
</style>
