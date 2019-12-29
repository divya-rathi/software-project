<template>
<section class="section edo-theme"> 
    <h1 class="is-size-1 is-family-secondary">Hello Nuxt</h1>
    <!-- <button class="button is-primary">
         <nuxt-link to="/course">Open course</nuxt-link>
    </button> -->
<div class="carousel">
  <div class="card top">
    <div class="card-image">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
      </div>
      <a class="btn btn-primary btn-md btn-rounded">View</a>
    </div>
  </div>

  <div class="card top">
    <div class="card-image">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
      </div>
      <a class="btn btn-primary btn-md btn-rounded">View</a>
    </div>
  </div>

  <div class="card top">
    <div class="card-image">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. 
      </div>
      <a class="btn btn-primary btn-md btn-rounded">View</a>
    </div>
  </div>


</div>

</section>


</template>

<style lang="scss" scoped>

.carousel{
  display: flex;
  height: auto;
  margin-top: 60px;
  margin-bottom: 100px;
}
.top{
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 25%;
}
a.btn.btn-primary{
  color:#fff;
  font-size: 14px;
}
.btn.btn-md{
  padding:.7rem 1.6rem;
  font-size:.7rem
}
.btn-md{
  padding-top:.58rem;
  padding-bottom:.58rem
}
.btn-rounded{
  -webkit-border-radius:10em;
  border-radius:10em
}
.btn-primary {
    background-color: #4285f4!important;
    color: #fff;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
}

</style>


<script>

export default {
  components: {
  }
}
</script>

