<template>
<div class="tot">
    <hooper :settings="hooperSettings">
        <slide class="has-text-centered" v-for="(code, index) in courseCodeList" :key="index">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <div v-html="courseIconList[index]"></div>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-centered is-family-primary">
                                {{ code }}
                            </p>
                            <p class="subtitle has-text-centered is-family-primary is-5">
                                {{ courseNameList[index] }}
                            </p>
                        </div>
                    </div>
                    <router-link :to="{ name: 'course' }" class="button is-family-sans-serif" @click.native="setcourseCode(code)">Goto Course</router-link>
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
    margin-top: 10vh;
}

.card {
    margin: 3rem;
    padding: 1rem;
}
</style>

<script>
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
} from "hooper";
import Accordion from "~/components/Accordion";
import {
    mapGetters
} from "vuex";
import "hooper/dist/hooper.css";

export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        Accordion
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
            courseNameList: [],
            courseIconList: []
        };
    },
    methods: {
        setcourseCode(courseCode) {
            this.$store.dispatch("course/search", courseCode);
        }
    },
    async mounted() {
        this.$store.dispatch("course/fetchCourseList");
        this.courseCodeList = this.courseList["courseCodeList"];
        this.courseNameList = this.courseList["courseNameList"];
        this.courseIconList = this.courseList["courseIconList"];
    },
    computed: {
        ...mapGetters({
            courseList: "course/getCourseList"
        })
    }
};
</script>
