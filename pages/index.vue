<template>
<div class="carousel column is-12-touch">
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> 
  <font-awesome-icon :icon="['fas', 'angle-left']" style="font-size: 50px" class="is-centered "/>
      <span class=" is-centered carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>
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
      <a class="button is-rounded">View</a>
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
      <a class="button is-rounded">View</a>
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
      <a class="button is-rounded" onclick="myFunction()">View</a>
    </div>
  </div>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <font-awesome-icon :icon="['fas', 'angle-right']" style="font-size: 50px"/>
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
  </a>
  <p id="demo"></p>
</div>

</template>

<style>
.carousel{
  display: flex;
  height: auto;
  margin-top: 200px;
  margin-bottom: 100px;
}
.top{
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 25%;
}
.button{
    background-color: #03A9F4;
}
.carousel-control-prev, .carousel-control-next{
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  color: lightseagreen;
}
@media screen and (max-width: 520px) {
  .carousel{
    width: 100%;
    display: block;
  }
  .top {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 75%;
    margin-bottom: 200px;
  }
  .carousel-control-prev, .carousel-control-next{
    display: none;
  }
}

</style>
