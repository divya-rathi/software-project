<template>
<div class="hero is-fullheight">
    <div class="container has-text-centered">
        <h1 class="title is-family-secondary is-size-1">Reviews</h1>
        <div class="panel">
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <Accordion class="accordion has-text-centered" question="Who can register?" answer="Any one who paid fee can register this course." />
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio saepe corporis nulla, incidunt officia quae aliquid laboriosam, similique labore modi nihil repellendus aperiam. Ducimus aperiam quidem, cum libero voluptas sint.
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident quis officia numquam? Itaque laudantium vitae ut, velit nobis culpa. Magnam sequi laborum ab quos mollitia corporis voluptate alias nesciunt.
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque quisquam obcaecati voluptatibus dolorum laboriosam eveniet quaerat maiores similique. Nihil fuga animi esse velit vel corporis atque nisi quasi. Voluptatibus.
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas, ipsum, veritatis sint debitis cumque at voluptates id deserunt nisi illo temporibus sed eum in fugiat obcaecati asperiores consequatur illum?
            </a>
        </div>
        <div class="control has-text-centered pad">
            <button type="submit" class="button is-dark is-medium is-family-monospace">
                <nuxt-link to="q&a">Q&A</nuxt-link>
            </button>
            <button type="submit" class="button is-dark is-medium is-family-monospace" v-if="isStudent" v-on:click="showModal">Post Review</button>
            <button type="submit" class="button is-dark is-medium is-family-monospace" v-if="!isStudent">
                <nuxt-link to="/course">Go Home</nuxt-link>
            </button>
        </div>
        <modal v-show="isModalVisible" @close="closeModal" />
    </div>
</div>
</template>

<style lang="scss" scoped>
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
import Accordion from '~/components/Accordion';
import modal from '~/components/post_review_modal.vue';

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
            isModalVisible: false,
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
}
</script>
