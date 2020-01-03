<template>
  <section class="section">
    <particles-bg num="50" type="cobweb" :bg="true" />
    <div class="card">
      <h1 class="title is-size-1 has-text-centered is-family-secondary">Login</h1>

      <form action method="post" @submit.prevent="login">
        <div class="field">
          <div class="control">
            <input
              type="email"
              class="input has-text-centered"
              name="email"
              v-model="email"
              placeholder="Tell us your email address.."
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              type="password"
              class="input has-text-centered"
              v-model="password"
              placeholder="Paswword here!"
            />
          </div>
        </div>

        <div class="control has-text-centered">
          <button
            type="submit"
            class="button is-dark is-rounded is-outlined is-medium is-family-primary"
            v-on:click="login"
          >Log In</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h1 {
  padding-top: calc(1rem + 1vh);
  padding-bottom: calc(1rem + 1vh);
}

.control {
  padding-bottom: calc(1rem + 1vh);
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

::placeholder {
  color: #ff7315;
}

.card {
  width: 70vw;
  padding-left: calc(3rem + 2vw);
  padding-right: calc(3rem + 2vw);
}
</style>

<script>
import { ParticlesBg } from "particles-bg-vue";
import firebase from "~/plugins/firebase.js";
export default {
  components: {
    ParticlesBg
  },

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$store.commit("userHandler/userLogin", {
        email: this.email,
        password: this.password
      });
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
