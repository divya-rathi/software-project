<template>
  <article class="message" :class="accordionClasses">
    <div
      class="message-header is-family-primary is-size-5"
      @click="toggleAccordion"
    >
      {{ question }}
      <button class="delete is-medium" aria-label="delete"></button>
    </div>
    <div class="message-body" v-if="answer">
      <div class="message-content is-size-5 is-family-monospace">
        {{ answer }}
      </div>
    </div>
    <div class="message-body" v-else>
      <div
        v-on:click="showModal"
        class="message-content is-size-5 is-family-monospace"
        v-if="userType == 'TEACHER' || userType == 'MENTOR'"
      >
        Wow...such empty!!
        <a href="#" v-on:click="showModal">Answer</a>
        Me!!
      </div>
      <div v-else class="message-content is-size-5 is-family-monospace">
        Wow...such empty!!
      </div>
      <modal
        v-show="isModalVisible"
        @close="closeModal"
        :questionId="questionId"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.message {
  width: 85vw;
}

.message-header {
  cursor: pointer;
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 5px;
}

.message-body {
  padding: 0;
  max-height: 15em;
  overflow-y: scroll;
  transition: 0.3s ease-in-out all;

  &::-webkit-scrollbar {
    display: none;
  }
}

.delete {
  transition: 0.3s ease-in-out all;
  background-color: black;
  color: black;
}

.is-closed {
  .message-body {
    max-height: 0;
  }

  .delete {
    transition: 0.3s ease-in-out all;
    transform: rotate(-135deg);
  }
}

.message-content {
  padding: 1rem;
}
</style>

<script>
import modal from "~/components/post_ans_modal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    modal
  },
  name: "Accordion",
  props: ["question", "answer", "questionId"],
  data: function() {
    return {
      isOpen: false,
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    ...mapGetters({
      userType: "users/getUserType"
    }),
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
        "": this.isOpen
      };
    }
  }
};
</script>
