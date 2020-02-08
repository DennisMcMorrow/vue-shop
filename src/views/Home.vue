<template>
  <div class="home container">
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
    <AboutUs></AboutUs>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import AboutUs from "@/sections/AboutUs.vue";

export default {
  name: "Home",
  components: {
    Navbar, Hero, Products, AboutUs
  }
};
</script>
