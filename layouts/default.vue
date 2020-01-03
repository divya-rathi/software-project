<template>
  <div>
    <a>
      <nuxt-link to="/course">course</nuxt-link>
    </a>
    <button v-if="user" v-on:click="logout">Logout</button>
    <a v-if="!user" class="is-pulled-right">
      <nuxt-link to="/login">Login</nuxt-link>
    </a>
    &nbsp; &nbsp;
    <a class>
      <nuxt-link to="/account">Account</nuxt-link>
    </a>
    <nuxt />
  </div>
</template>

<style>
a {
  color: red;
}
</style>

<script>
import firebase from "~/plugins/firebase.js";

export default {
  components: {},
  data() {
    return {
      user: this.$store.userLogState
    };
  },
  methods: {
    logout() {
      this.$store.commit("userHandler/userLogout");
    }
  }
};
</script>
