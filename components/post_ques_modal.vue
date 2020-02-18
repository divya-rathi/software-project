<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <div class="card">
                <p class="title is-size-3 is-family-secondary has-text-centered">
                    Post your question here!!
                </p>
                <form action method="post" @submit.prevent="submit">
                    <div class="field">
                        <div class="control">
                            <textarea type="password" cols="60" v-model="question" class="input is-shadowless textarea is-family-secondary" placeholder="Type your question here!" required />
                            </div>
            </div>

            <div class="control has-text-centered">
              <button
                type="submit"
                class="button is-dark is-rounded is-outlined is-medium is-family-primary"
                v-on:click="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            <!-- <button class=" button btn-green is-medium" @click="close" aria-label="Close modal">
                        Close me!
                    </button> -->
            <button
              class=" button btn-green is-medium"
              @click="close"
              aria-label="Close modal"
            >
              <nuxt-link to="/Q&A">Close me!</nuxt-link>
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
::placeholder {
    color: #ee8972;
}

textarea {
    border-color: black;
    color: black;
}

.card {
    padding: 2rem;
    border-radius: 1rem;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    color: #4aae9b;
    justify-content: space-between;
}

.modal-footer {
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}
</style>

<script>
import {
    mapGetters
} from "vuex";

export default {
    name: "modal",
    data() {
        return {
            question: ""
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },
        submit() {
            if (this.question !== "") {
                let questionData = {
                    answer: "",
                    courseCode: this.courseCode,
                    facultyId: "",
                    question: this.question,
                    rollNumber: this.userRollNumber
                };
                this.$store.dispatch("question/postQuestion", questionData);
                this.$emit("close");
                this.question = "";
            }else
            {
                alert('Fill Question field');
            }

        }
    },
    computed: {
        ...mapGetters({
            courseCode: "course/getCourseCode",
            userRollNumber: "users/getUserRollNumber"
        })
    }
};
</script>
