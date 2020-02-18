<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <div class="card">
                <div class="is-size-3  is-family-secondary ">Rate the course..</div>
                <div class="stars">
                    <star-rating v-model="rating" show-rating="false" star-size="40" inactive-color="black" glow="2"></star-rating>
                </div>
                <br />
                <form action method="post" @submit.prevent="postReview">
                    <div class="field ">
                        <div class="control">
                            <textarea type="text" cols="50" class="input is-shadowless textarea is-type-3 is-family-secondary" v-model="review" placeholder="Tell us some more about the course.." required />
                            </div>
            </div>

            <div class="control has-text-centered">
              <br />
              <button
                type="submit"
                class="button is-dark is-rounded is-outlined is-medium is-family-primary"
                v-on:click="postReview"
              >
                Submit
              </button>
            </div>
          </form>
          <br />
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
              <nuxt-link to="/review">Close me!</nuxt-link>
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.stars {
    width: 100%;
    padding-left: 15vw;
    padding-right: 15vw;
}

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
import StarRating from "vue-star-rating";
import {
    mapGetters
} from "vuex";

export default {
    name: "modal",
    components: {
        StarRating
    },
    data() {
        return {
            rating: 0,
            review: ""
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },
        postReview() {
            if (this.rating !== 0 && this.review !== "") {
                let reviewData = {
                    courseCode: this.courseCode,
                    reviewText: this.review,
                    rating: {
                        "0": this.rating
                    },
                    rollNumber: this.userRollNumber
                };
                this.$store.dispatch("review/postReview", reviewData);
                this.$emit("close");
                this.rating = 0;
                this.review = "";
            }
            else{
                alert("Fill both stars and review");
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
