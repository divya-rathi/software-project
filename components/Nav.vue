<template>
<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <!-- <a class="navbar-item">
        Home
      </a> -->

      <!-- <a class="navbar-item">
        Documentation
      </a> -->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
           <nuxt-link to="/course"><strong> course</strong></nuxt-link>
            
          </a>
          <a class="button is-dark">
            <nuxt-link to="/login"><strong> Login</strong></nuxt-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<style lang="scss" scoped>

nav
{
   background-color: pink; 
}

</style>

<script>
</script>
