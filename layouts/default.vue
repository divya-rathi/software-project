<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item navbar-title">
          <h1>CRP</h1>
        </span>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <nuxt-link to="/">
              <strong>Home</strong>
            </nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/account" v-if="userLoggedIn">
              <strong>Account</strong>
            </nuxt-link>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!userLoggedIn">
                <nuxt-link to="/login">
                  <strong>Log In</strong>
                </nuxt-link>
              </a>
              <a class="button is-primary" v-if="userLoggedIn" v-on:click="logout">
                <strong>Log Out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
  <!-- <div>
    <a>
      <nuxt-link to="/course">course</nuxt-link>
    </a>
    <button v-if="userLoggedIn" v-on:click="logout">Logout</button>
    <a v-if="!userLoggedIn" class="is-pulled-right">
      <nuxt-link to="/login">Login</nuxt-link>
    </a>
    &nbsp; &nbsp;
    <a v-if="userLoggedIn" class>
      <nuxt-link to="/account">Account</nuxt-link>
    </a>
    <nuxt />
  </div>-->
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans&display=swap");

.navbar-title {
  font-family: "Fira Sans", sans-serif;
  font-size: x-large;
  font-weight: bolder;
}

a:visited {
  color: black;
}

.button a:visited {
  color: white;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  methods: {
    logout() {
      this.$store.dispatch("users/logout");
    }
  },
  computed: mapGetters({
    userLoggedIn: "users/isUserLoggedIn"
  })
};
</script>
