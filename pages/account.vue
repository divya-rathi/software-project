<template>
<section class="hero is-small is-primary is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-family-monospace is-size-2">
             T P V Krishna Teja
            </h1>
            <div class="media">
                <div class="media-left is-hidden-mobile">
                    <figure class="image">
                        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content is-size-4 is-family-monospace inpad">
                    <div class="media inpad">
                        <div class="media-left">💂 Roll Number:</div>
                        <div class="media-content">Roll Number here</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left">☎️ Phone:</div>
                        <div class="media-content">Phone number here</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left"> 📧 Email:</div>
                        <div class="media-content">Mail here</div>
                    </div>
                    <div class="media inpad">
                        <div class="media-left"> 🎯 Courses:</div>
                        <div class="media-content">Attended courses here</div>
                    </div>
                    <div class="media inpad">
                        Some buttons here if necessary!
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>

.title
{
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
import {
    ParticlesBg
} from "particles-bg-vue";
export default {
    components: {
        ParticlesBg
    },

    data() {
        return {

        }
    },

    methods: {

    }

}
</script>
