<template>
  <div>
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
  </div>
</template>

<style>
a {
  color: red;
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
