<template>
  <section class="section">
    <particles-bg num="50" type="cobweb" :bg="true" />
    <div class="card">
      <h1 class="title is-size-1 has-text-centered is-family-secondary">
        Login
      </h1>

      <form action method="post" @submit.prevent="login">
        <div class="field">
          <div class="control">
            <input
              type="email"
              class="input has-text-centered"
              name="email"
              v-model="account.email"
              id ="email"
              placeholder="Tell us your email address.."
              id="email"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              type="password"
              class="input has-text-centered"
              v-model="account.password"
              placeholder="Password here!"
              id="pass"
              required
            />
          </div>
        </div>

        <div class="control has-text-centered">
          <button
            type="submit"
            class="button is-dark is-rounded is-outlined is-medium is-family-primary"
            v-on:click="login"
          >
            Log In
          </button>
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

input {
  overflow: scroll;
}

.card {
  width: 50%;
  padding-left: calc(3rem + 2vw);
  padding-right: calc(3rem + 2vw);
}

@media only screen and (max-width: 768px) {
  .card {
    width: 80vw;
  }
}
</style>

<script>
import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    ParticlesBg
  },
  data() {
    return {
      account: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (
        this.account.email.localeCompare("") &&
        this.account.password.localeCompare("")
      ) {
        this.$store
          .dispatch("users/login", this.account)
          .then(() => {
            console.log("Routing to Home Page");
            this.$router.push({
              path: "/"
            });
          })
          .catch(err => alert(err, this.account));
      } else {
        alert("Please enter both username and password");
      }
    }
  }
};
</script>
