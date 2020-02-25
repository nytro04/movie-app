<template>
  <div class="header">
    <app-nav-bar></app-nav-bar>
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="false"
    >
      <slide>
        <h3>Black widow</h3>
        <img
          src="../assets/Black-Widow-poster-2.jpg"
          alt=""
          class="img-fluid"
        />
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { Carousel, Slide } from "vue-carousel";

// import headerImg from "../assets/Black-Widow-poster-2.jpg"

export default {
  name: "Header",
  components: {
    appNavBar: Navbar,
    Carousel,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  font-family: "Open Sans", sans-serif;
  color: #eee;

  min-height: 100vh;
  // background-image: url("../assets/sonic.jpg");
  background-color: #282128;
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  &__img {
    border-radius: 10px;
    height: 32rem;
    width: 25rem;
  }

  h4 {
    color: #e0b955;
    font-weight: 300;
  }

  .link__btn {
    color: #e0b955;
    padding: 0.4rem 2rem;
    border-radius: 5rem;
    background-color: #282128;
    border: 1px solid #474747;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      background-color: #413b41;
      transform: translateY(-0.3rem) !important;
    }

    :active {
      transform: translateY(-0.1rem) !important;
    }
    // :focus {

    // }
  }

  i {
    color: #e0b955;
  }

  .logo {
    height: 2.5rem;
    width: auto;

    &__first {
      margin-left: 4.5rem;
    }

    &__second {
      margin-right: 4.5rem;
    }

    &__meta {
      height: 1.8rem;
    }
  }
}
</style>
