<template>
<div class="">
    <hooper :settings="hooperSettings">
        <slide class="has-text-centered">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{courseCode1}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                    <router-link :to="{name:'course'}" class="button" @click.native="setcourseCode(courseCode1)">Goto Course</router-link>
                </div>
            </div>
        </slide>

        <slide class="has-text-centered">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{courseCode2}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                    <router-link :to="{name:'course'}" class="button" @click.native="setcourseCode(courseCode2)">View</router-link>
                </div>
            </div>
        </slide>

        <slide class="has-text-centered">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{courseCode3}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                    <router-link :to="{name:'course'}" class="button" @click.native="setcourseCode(courseCode3)">View</router-link>
                </div>
            </div>
        </slide>

        <slide>
            slide 4
        </slide>
        <slide>
            slide 5
        </slide>
        <slide>
            slide 6
        </slide>
        <slide>
            slide
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</div>
</template>

<style lang="scss" scoped>
.hooper {
    height: auto;
}

.card {
    margin: 2rem;
}
</style>

<script>
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
    data() {
        return {
            hooperSettings: {
                mouseDrag: false,
                touchDrag: false,
                breakpoints: {
                    300: {
                        centerMode: false,
                        itemsToShow: 1,
                        itemsToSlide: 1
                    },
                    700: {
                        centerMode: false,
                        itemsToShow: 2,
                        itemsToSlide: 2
                    },
                    1000: {
                        transition: 500,
                        centerMode: false,
                        itemsToShow: 3,
                        itemsToSlide: 3,
                        mouseDrag: false
                    }
                }
            },
            courseCode1: "15CSE111",
            courseCode2: "15CSE102",
            courseCode3: "15CSE111",
        }
    },
    methods: {
        setcourseCode(courseCode) {
            let courseCodeList = new Array();
            let courseNameList = new Array();

            this.$store.dispatch('course/search', courseCode);
            db.collection("courses").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    courseCodeList.push(doc.id);
                    courseNameList.push(doc.data().courseName);
                });
            });
        }
    }
}
</script>
