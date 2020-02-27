<template>
  <div class="list">
    <div class="container py-5">
      <h3>Movies</h3>
      <div class="btn-group py-5 " role="group" aria-label="Basic example">
        <button @click="popular" class="btn btn-warning">Popular</button>
        <button @click="topRated" class="btn btn-light">Top Rated</button>
        <button @click="upcoming" class="btn btn-light">Upcoming</button>
      </div>
      <!-- <h3>Most Popular Movies</h3> -->
      <div class="row" v-if="movieList">
        <div class="col-md-3" v-for="movie in movieList" :key="movie.id">
          <img :src="getImgUrl(movie.poster_path)" alt="movie poster" class="img-fluid my-3 image" />
          <!-- <p>{{ movie.title }}</p> -->
        </div>
      </div>
      <button class="btn-sm btn-warning mt-4">See More → </button>
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
    // categoryName: {
    //   type: String
    //   // required: true
    // }
  },
  name: "MoviesList",
  data() {
    return {
      categoryName: "",
      buttonColor: ""
    };
  },
  methods: {
    getImgUrl(imgLink) {
      return `https://image.tmdb.org/t/p/w342/${imgLink}`;
    },

    popular() {
      this.categoryName = "popular";

      this.buttonColor = "warning";

      this.$emit("popularCategory", this.categoryName);
    },
    // latest() {
    //   this.categoryName = "latest";

    //   this.$emit("latestCategory", this.categoryName);
    // },
    topRated() {
      this.categoryName = "top_rated";

      this.buttonColor = "warning";

      this.$emit("topRatedCategory", this.categoryName);
    },
    upcoming() {
      this.categoryName = "upcoming";

      this.buttonColor = "warning";

      this.$emit("upcomingCategory", this.categoryName);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  min-height: 100vh;
  background-color: #282128;
  color: #fff;
}

.image {
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.8rem) scale(1.05);
  }
}

// .col-md-3 {
//   background-color: #fff;
// }
</style>
