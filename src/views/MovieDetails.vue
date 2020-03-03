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
            <!-- Genres -->
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
            <p>{{ movie.runtime | getDurationStr }}</p>
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
        <div class="col-md-4 mt-3">
          <div class="row" v-for="chunk in castChunks" :key="chunk.id">
            <div class="col-md-4 cast" v-for="item in chunk" :key="item.id">
              <img
                :src="getProfileUrl(item.profile_path)"
                alt=""
                class="img-fluid cast__image"
              />
              <p class="cast__name">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="line" />

      <div class="container">
        <div class="videos">
          <h3 class="pt-5 pb-3">Trailers</h3>
          <carousel
            :per-page="1"
            :navigate-to="someLocalProperty"
            :mouse-drag="false"
          >
            <slide v-for="video in movieVideos" :key="video.id">
              <youtube
                class="pt-3 videos__slide d-flex justify-content-center"
                @click="show"
                :video-id="video.key"
              ></youtube>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import _ from "lodash";

export default {
  name: "MovieDetails",
  components: {
    AppNavbar: NavbarVue,
    Carousel,
    Slide
  },
  data() {
    return {
      // moviedId: "" * 1,
      itemsPerRow: 3,
      casts: [],
      movie: {},
      movieVideos: []
    };
  },

  created() {
    this.fetchMovie();
    this.fetchMovieVideo();
    this.fetchCast();
  },

  computed: {
    productChunks() {
      return _.chunk(Object.values(this.movieVideos), this.itemsPerRow);
    },
    castChunks() {
      return _.chunk(Object.values(this.casts), this.itemsPerRow);
    }
  },

  filters: {
    getDurationStr(mins) {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      m = m < 10 ? "0" + m : m;
      return `${h}h ${m}m`;
    }
  },

  methods: {
    getImgUrl(imgLink) {
      return `https://image.tmdb.org/t/p/w342/${imgLink}`;
    },
    getProfileUrl(imgLink) {
      return `https://image.tmdb.org/t/p/w342/${imgLink}`;
    },

    // itemsCountInRow(index) {
    //   return this.movieVideos.slice((index - 1) * this.itemsPerRow);
    // },
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
    async fetchCast() {
      //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
      const baseUrl = `https://api.themoviedb.org/3/movie`;

      const { id } = this.$route.params;

      // this.moviedId = id;

      // console.log(typeof id, id);
      try {
        const res = await axios.get(`${baseUrl}/${id}/credits`, {
          params: {
            api_key: process.env.VUE_APP_MOVIE_DB_API_KEY,
            language: process.env.VUE_APP_API_LANG
          }
        });

        // console.log(res.data.cast);

        // slice to return only first six casts
        this.casts = res.data.cast.slice(0, 6);

        console.log(this.casts);
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
  margin: 1rem 5rem 1rem 1rem;
  // padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 18rem;

  &:hover {
    transform: translateY(-0.8rem) scale(1.05);
  }
}

.cast {
  &__image {
    border-radius: 1rem;
  }

  &__name {
    padding-top: 0.8rem !important;
    font-size: 0.8rem !important;
    text-align: center;
  }
}

.videos {
  &__slide {
    margin: 0 auto;
  }
}

hr {
  border-top: 1px solid #ddd;
}
</style>
