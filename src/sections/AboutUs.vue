<template>
  <div class="aboutus">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="aboutus-content">
            <div class="graphic">
              <img src="/img/svg/product.svg" alt />
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <h1 class="aboutus-title">Learn More About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?</p>
          <div class="aboutus-btn mt-5">
            <button class="btn custom-btn btn-outline-secondary">Browse Products</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutus {
  padding-top: 2rem;
  padding-bottom: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>