<template>
  <div class="details">
    <app-navbar></app-navbar>
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="heading heading__primary-1 my-3">The Black Widow</h2>
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
          <div> <i class="fas fa-film mr-2 pb-3 text-warning"></i>DRAMA | ACTION </div>
          <p class="test">English | Hindi | French</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nostrum, eveniet dolorem, neque dolor iusto quisquam
            voluptas ea nulla fuga pariatur doloribus. Eaque,
            temporibus magni numquam, itaque quos libero sed obcaecati
            doloribus ullam optio explicabo incidunt reiciendis quaerat
            <!-- eveniet, ex labore. <span><router-link to=""></router-link></span> -->
          </p>

          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Director</p>
            <p>Rian Johnson</p>
          </div>
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
          <img src="" alt="" class="img-fluid">
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
      moviedId: ""
    };
  },

  methods: {
    async fetchMovie() {
      //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
      const baseUrl = `https://api.themoviedb.org/3/movie`;
      try {
        const res = await axios.get(`${baseUrl}/${this.moviedId}`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG
          }
        });

        console.log(res);
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
    border-bottom: 1px solid #ddd;
    padding-bottom: 1.1rem;
    // margin: 0 20rem;
    // width: 50%;
  }
}
</style>