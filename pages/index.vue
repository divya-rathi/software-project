<template>
<div class="tot">
    <hooper :settings="hooperSettings">
        <slide class="has-text-centered" v-for="(code,index) in courseCodeList" :key="index">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-centered is-family-primary">{{code}}</p>
                            <p class="subtitle has-text-centered is-family-primary is-5">{{courseNameList[index]}}</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                    <router-link :to="{name:'course'}" class="button is-family-sans-serif" @click.native="setcourseCode(code)">Goto Course</router-link>
                </div>
            </div>
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
    margin: 3rem;
}
</style>

<script>
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";
import {
    fireDb
} from "@/services/firebase";

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
            courseCodeList: [],
            courseNameList: []
        };
    },

    methods: {
        setcourseCode(courseCode) {
            this.$store.dispatch("course/search", courseCode);
            console.log("hello");
        }
    },
    mounted() {
        // what to do to connect to db??
        fireDb
            .collection("courses")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.courseCodeList.push(doc.id);
                    this.courseNameList.push(doc.data().courseName);
                });
            });
        console.log(this.courseCodeList);
        console.log(this.courseNameList);
    }
};
</script>
