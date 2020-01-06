<template>
  <section class="hero is-small is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-family-monospace is-size-2">{{ name }}</h1>
        <div class="media">
          <div class="media-left is-hidden-mobile">
            <figure class="image">
              <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content is-size-4 is-family-monospace inpad totext">
            <div class="media inpad">
              <div class="media-left">💂 Roll Number:</div>
              <div class="media-content">{{ rollno }}</div>
            </div>
            <div class="media inpad">
              <div class="media-left">☎️ Phone:</div>
              <div class="media-content">{{ phoneno }}</div>
            </div>
            <div class="media inpad">
              <div class="media-left">📧 Email:</div>
              <div class="media-content">{{ email }}</div>
            </div>
            <div class="media inpad">
              <div class="media-left">🎯 Courses:</div>
              <div class="media-content">MBA, CSE, EEE, COA</div>
            </div>
            <div class="media inpad">Some buttons here if necessary!</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.totext {
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}

.title {
  padding-left: 1vw;
}

.hero {
  padding-top: calc(4rem + 2vh);
  min-height: 100vh;
}

.inpad {
  padding-top: calc(1rem + 1vh);
}
</style>

<script>
import { ParticlesBg } from "particles-bg-vue";
import { fireDb } from "@/services/firebase";
import { mapState } from "vuex";
export default {
  components: {
    ParticlesBg
  },
  data() {
    return {
      name: null,
      email: null,
      rollno: null,
      phoneno: null
    };
  },
  methods: {},
  async created() {
    let user = this.$store.state.users.user;
    let userDetails = await fireDb
      .collection("users")
      .doc(user.uid)
      .get();

    userDetails = userDetails.data();
    console.log(userDetails);
    this.name = userDetails["name"];
    this.email = userDetails["email"];
    this.rollno = userDetails["registrationNumber"];
    this.phoneno = userDetails["phoneNumber"];
  }
};
</script>
