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
          v-on:click="activate = !activate"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class="{'is-active': activate, 'navbar-menu': true}">
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

          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="course code" v-model="courseCode" />
              </p>
              <p class="control">
                <button class="button is-info" @click="search">Search</button>
              </p>
            </div>
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
              <a class="button is-primary is-outlined" v-if="userLoggedIn" v-on:click="logout">
                <strong>Log Out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
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

.navbar-item input {
  min-width: 13ch;
  width: 13ch;
  max-width: 48ch;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  methods: {
    logout() {
      this.$store.dispatch("users/logout");
    },
    search() {
      let courseCode = this.courseCode.trim().toUpperCase();
      this.$store.dispatch("course/search", courseCode);
      this.$router.push({
        path: "/course"
      });
    }
  },
  computed: mapGetters({
    userLoggedIn: "users/isUserLoggedIn"
  }),
  data() {
    return {
      activate: false,
      courseCode: ""
    };
  }
};
</script>
