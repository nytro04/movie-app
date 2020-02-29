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
            <i class="fas fa-film mr-2 pb-3 text-warning"></i>
            <span v-for="genre in movie.genres" :key="genre.id" class="mr-2">
              {{ genre.name }}
            </span>
          </div>
          <p
            v-for="language in movie.spoken_languages"
            :key="language.iso_639_1"
          >
            <i class="fas fa-microphone-alt mr-4 text-warning"></i>
            {{ language.name }}
          </p>
          <h5 class=" mt-4 mb-3 text-warning">Summary</h5>
          <p class="test">
            <!-- <i class="far fa-comment-alt mr-5"></i> -->
            {{ movie.overview }}
          </p>

          <p class="mr-4 text-info">{{ movie.tagline }}</p>

          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Release :</p>
            <p>{{ movie.release_date }}</p>
          </div>
          <div class="d-flex justify-content-start">
            <p class="mr-4 text-warning">Duration :</p>
            <p>{{ movie.runtime }} mins</p>
          </div>
          <div class="d-flex">
            <div class="mr-4 text-warning">Ratings :</div>
            <div class="step">{{ movie.vote_average }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            :src="getImgUrl(movie.poster_path)"
            alt=""
            class="img-fluid image"
          />
        </div>
        <div class="col-md-4">
          <!-- <div v-for="video in movieVideos" :key="video.id"> -->
          <div class="row" v-for="i in rowCount" :key="i">
            <!-- <span v-for="item in itemsCountInRow(i)" :key="item"> -->
            <!-- {{ item }} -->
            <youtube
              class="col-md-4"
              v-for="item in itemsCountInRow(i)"
              :key="item"
              player-height="300"
              player-width="500"
              @click="show"
              :video-id="item.key"
            >
              <!-- <modal
                transition="nice-modal-fade"
                :width="50"
                :height="50"
                @before-open="beforeOpen"
                @before-close="beforeClose"
                name="youtube"
              >
                <button @click="show">show</button>
              </modal> -->
            </youtube>
            <!-- </span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import axios from "axios";
// import _ from "lodash";

export default {
  name: "MovieDetails",
  components: {
    AppNavbar: NavbarVue
  },
  data() {
    return {
      // moviedId: "" * 1,
      itemsPerRow: 3,
      movie: {},
      movieVideos: []
    };
  },

  created() {
    this.fetchMovie();
    this.fetchMovieVideo();
  },

  computed: {
    rowCount() {
      return Math.ceil(this.movieVideos.length / this.itemsPerRow);
    }
  },

  methods: {
    getImgUrl(imgLink) {
      return `https://image.tmdb.org/t/p/w342/${imgLink}`;
    },

    itemsCountInRow(index) {
      return this.movieVideos.slice((index - 1) * this.itemsPerRow);
    },
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
    },
    async fetchMovieVideo() {
      //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
      const baseUrl = `https://api.themoviedb.org/3/movie`;

      const { id } = this.$route.params;

      // this.moviedId = id;

      // console.log(typeof id, id);
      try {
        const res = await axios.get(`${baseUrl}/${id}/videos`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG
          }
        });

        console.log(res.data.results);

        this.movieVideos = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },

    beforeOpen(event) {
      console.log(event);
      // Set the opening time of the modal
      this.time = Date.now();
    },
    beforeClose(event) {
      console.log(event);
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop();
      }
    },

    show() {
      this.$modal.show("youtube");
    },
    hide() {
      this.$modal.hide("youtube");
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

.step {
  font-size: 0.8rem;
  color: #fff;
  border-radius: 1.5rem;
  border: 1px solid #e0b955;
  width: 2.2rem;
  line-height: 2rem;
  background-color: transparent;
  padding-left: 0.5rem;
}

.image {
  border-radius: 1.5rem;
  margin: 1rem 5rem;
  // padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.8rem) scale(1.05);
  }
}
</style>
