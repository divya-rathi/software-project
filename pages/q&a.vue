<template>
  <div class="hero is-fullheight">
    <div class="container has-text-centered">
      <h1 class="title is-family-secondary is-size-1">Questions</h1>
      <div class="panel">
        <!-- <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <Accordion class="accordion has-text-centered" question="Who can register?" answer="Any one who paid fee can register this course." />
            </a> -->
        <div v-for="(val, key) in getQuestions" :key="key">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <Accordion
              class="accordion has-text-centered"
              :question="val.question"
              :answer="val.answer"
              :questionId="key"
            />
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
          v-if="userType == 'STUDENT'"
          v-on:click="showModal"
        >
          Post Question
        </button>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<style lang="scss" scoped>
.ansbutton {
  margin-right: calc(1vw + 1rem);
  margin-left: calc(1vw + 1rem);
  margin-bottom: 1rem;
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
import modal from "~/components/post_ques_modal.vue";
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
      isModalVisible: false,
      questionId: ""
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    setQuestionId: function(qid) {
      this.questionId = qid;
      console.log(this.questionId);
    }
  },
  computed: {
    ...mapGetters({
      getQuestions: "course/getCourseQuestions",
      userType: "users/getUserType"
    }),
    questions() {
      let questionData = {};
      Object.values(this.getQuestions).forEach(element => {
        questionData[element["question"]] = element["answer"];
      });
      return questionData;
    }
  }
};
</script>
