<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item navbar-title">
          <h1 class="title is-3">CRP</h1>
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

      <div
        id="navbarBasicExample"
        :class="{ 'is-active': activate, 'navbar-menu': true }"
      >
        <div class="navbar-start">
          <div class="navbar-item has-text-black">
            <nuxt-link to="/">
              <strong class="has-text-grey">Home</strong>
            </nuxt-link>
          </div>
          <div class="navbar-item is-info">
            <nuxt-link to="/account" v-if="userLoggedIn">
              <strong>Account</strong>
            </nuxt-link>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="course code"
                  v-model="courseCode"
                />
              </p>
              <p class="control">
                <button class="button is-info" @click="search">Search</button>
              </p>
            </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!userLoggedIn">
                <nuxt-link to="/login">
                  <strong>Log In</strong>
                </nuxt-link>
              </a>
              <a
                class="button is-primary is-outlined"
                v-if="userLoggedIn"
                v-on:click="logout"
              >
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

<style></style>

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
  mounted() {
    let userObject = window.$nuxt.$store.state.users
    if (Object.entries(userObject).length === 0 && userObject.constructor === Object) {
      window.$nuxt.$store.commit("users/SET_UID", null);
      window.$nuxt.$store.commit("users/SET_USER_DETAILS", null);
      window.$nuxt.$store.commit("users/SET_USER_LOGGEDIN", false);
    }
  },
  data() {
    return {
      activate: false,
      courseCode: ""
    };
  }
};
</script>
