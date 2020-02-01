<template>
<div class="part-3 container">
    <div class="is-size-3  is-family-secondary ">Rate the course..</div>
    <star-rating v-model="rating" show-rating="false" star-size=40 inactive-color="black" glow=2></star-rating>
    <br>
    <form action method="post" @submit.prevent="login">
        <div class="field ">
            <div class="control">
                <textarea type="text" class="input is-shadowless textarea is-type-3 is-family-secondary" v-model="review" placeholder="Tell us some more about the course.." required />
                </div>
            </div>

        <div class="control has-text-centered">
            <br>
          <button
            type="submit"
            class="button is-dark is-rounded is-outlined is-medium is-family-primary"
            v-on:click="submit"
          >Submit</button>
        </div>
         </form>
    </div>
</template>

<style lang="scss" scoped>
::placeholder {
    color: #BAADAB;
}

textarea {
    border-radius: 1rem;
    border-color: black;
}

.part-3 {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
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
import StarRating from 'vue-star-rating';

export default {
    components: {
        StarRating
    },
    data() {
        return {
            rating: 0,
            review: "",
        };
    },
}
</script>
