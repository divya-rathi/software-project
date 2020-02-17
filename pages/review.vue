<template>
  <div class="hero is-fullheight">
    <div class="container has-text-centered">
      <h1 class="title is-family-secondary is-size-1">Reviews</h1>
      <div class="panel">
        <div v-for="(key, val) in reviews" :key="key">
          <a class="panel-block is-size-5 is-family-secondary">
            {{ val }} : {{ key.reviewText }}
          </a>
        </div>
      </div>
      <div class="control has-text-centered pad">
        <button
          type="submit"
          class="button is-dark is-medium is-family-monospace"
        >
          <nuxt-link to="/course">Go Back</nuxt-link>
        </button>
        <button
          type="submit"
          class="button is-dark is-medium is-family-monospace"
          v-if="isUserLoggedIn && userType == 'STUDENT'"
          v-on:click="showModal"
        >
          Post Review
        </button>
      </div>
      <modal v-show="isModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel
{
    min-width: 80vw;
}

.button {
  color: white;
  min-width: 10vw;
  margin-right: calc(0.5rem + 1vw);
}

.description {
  padding-left: calc(1rem + 1vw);
  padding-right: calc(1rem + 1vw);
}

.panel-block {
  padding-top: calc(1rem + 2vh);
  padding-bottom: calc(1rem + 2vh);
}

.pad {
  padding-bottom: 2rem;
}

.title {
  padding-top: calc(1.5rem + 2vh);
}
</style>

<script>
import Accordion from "~/components/Accordion";
import modal from "~/components/post_review_modal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Accordion,
    modal
  },
  data() {
    return {
      time: 0,
      duration: 5000,
      isStudent: true,
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    ...mapGetters({
      reviews: "course/getCourseReviews",
      userType: "users/getUserType",
      isUserLoggedIn: "users/isUserLoggedIn"
    })
  }
};
</script>
