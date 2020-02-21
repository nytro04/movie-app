<template>
  <div class="header">
    <app-nav-bar></app-nav-bar>

    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 py-5">
          <p class="pt-5">
            <span> <i class="fas fa-film mr-2"></i>DRAMA | ACTION </span>
            <span class="ml-5"><i class="far fa-clock mr-2"></i> 2:20 </span>
            <!-- <i class="far fa-clock"></i> -->
            <!-- <i class="far fa-calendar-alt"></i> -->
          </p>
          <h2 class="heading heading__primary-1 my-3">The Black Widow</h2>
          <h4 class="my-4">Woman super powere from marvel</h4>
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque eligendi quidem
            praesentium dolore asperiores, similique soluta
            vero hic. Accusantium, esse...
          </p>
          <router-link to="" tag="button" class="link__btn">See Movie →</router-link>
        </div>
        <div class="col-md-6 text-center">
          <img src="../assets/Black-Widow-poster-2.jpg" alt="header" class="img-fluid mx-4 header__img">
          <div class="d-flex justify-content-between py-5">
            <div>
              <img src="../assets/imdb.png" alt="" class="img-fluid logo logo__first mr-2" />
              <span>IMDB</span>
            </div>
            <div class="logo__second">
              <img src="../assets/meta.png" alt="" class="img-fluid logo__meta mr-2" />
              <span>Metacritic</span>
              <p>7.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

// import headerImg from "../assets/Black-Widow-poster-2.jpg"

export default {
  name: "Header",
  components: {
    appNavBar: Navbar
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
