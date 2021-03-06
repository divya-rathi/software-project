<template>
  <div class="hero is-fullheight">
    <h1 class="has-text-centered is-size-1 is-family-sans-serif title" id="courseCode">
      {{ courseCode }} - {{ courseDetails.courseName }}
    </h1>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column card is-hidden-mobile">
            <div class="card-content is-size-3 has-text-centered">
              {{ courseCode }}
            </div>
            <div class="card-content is-size-4 has-text-centered">
              {{ courseDetails.courseName }}
            </div>
            <div class="has-text-centered is-size-4">Rating:</div>
            <div class="ratingClass">
              <star-rating
                v-model="rating"
                read-only="true"
                star-size="40"
                inactive-color="black"
                glow="2"
              ></star-rating>
            </div>
          </div>
          <div class="column is-three-quarters description">
            <div
              v-for="(key, val) in courseDetails.courseDescription.units"
              :key="val"
              class="content"
            >
              <p class="title is-size-4 is-family-monospace has-text-centered">
                {{ val }}
              </p>
              <p
                class="subtitle is-size-4 is-family-monospace has-text-centered"
              >
                {{ key }}
              </p>
              <hr />
            </div>

            <div
              v-if="
                Object.keys(courseDetails.courseDescription.textbooks)
                  .length !== 0
              "
            >
              <h2 class="is-size-3 has-text-centered is-family-sans-serif">
                Text Books
              </h2>
              <br />
              <div
                v-for="val in courseDetails.courseDescription.textbooks"
                :key="val"
                class="content"
              >
                <p
                  class="subtitle is-size-4 is-family-monospace has-text-centered"
                >
                  {{ val }}
                </p>
                <hr />
              </div>
            </div>
            <div
              v-if="
                Object.keys(courseDetails.courseDescription.references)
                  .length !== 0
              "
            >
              <h2 class="is-size-3 has-text-centered is-family-sans-serif">
                References
              </h2>
              <br />
              <div
                v-for="val in courseDetails.courseDescription.references"
                :key="val"
                class="content"
              >
                <p
                  class="subtitle is-size-4 is-family-monospace has-text-centered"
                >
                  {{ val }}
                </p>
                <hr />
              </div>
            </div>

            <div class="control has-text-centered">
              <button
                type="submit"
                class="button is-dark is-medium is-family-monospace"
              >
                <nuxt-link to="/Q&A">Q&A</nuxt-link>
              </button>
              <button
                type="submit"
                class="button is-dark is-medium is-family-monospace"
              >
                <nuxt-link to="/review">Reviews</nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ratingClass {
  margin-left: calc(1rem + 1vw);
}

.card {
  max-width: 25vw;
  max-height: calc(4vh + 25rem);
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
import { fireDb } from "@/services/firebase.js";
import { mapGetters } from "vuex";
import Accordion from "~/components/Accordion";
import StarRating from "vue-star-rating";

export default {
  components: {
    Accordion,
    StarRating
  },
  data() {
    return {
      review: "",
      isStudent: true
    };
  },
  computed: {
    ...mapGetters({
      courseCode: "course/getCourseCode",
      courseDetails: "course/getCourseDetails",
      courseReviews: "course/getCourseReviews"
    }),
    rating() {
      let rateNum = 0;
      let count = 0;
      Object.values(this.courseReviews).forEach(elem => {
        rateNum += elem.rating[0];
        count += 1;
      });
      return rateNum == 0 ? 0 : Math.floor(rateNum / count);
    }
  }
};
</script>
