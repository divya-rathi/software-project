<template>
<div class="hero is-fullheight">
    <div v-if="!visible">
        <h1 class="has-text-centered is-size-1 is-family-sans-serif title">{{courseCode}} - {{ courseDetails.courseName }}</h1>
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column card is-hidden-mobile">
                        <div class="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis praesentium alias excepturi mollitia libero quas dicta repudiandae a nemo numquam nobis neque nostrum laborum, laudantium sint vel molestiae sed!</div>
                        <div class="has-text-centered">Rating comes here</div>
                    </div>
                    <div class="column is-three-quarters description">
                        <div v-for="(key,val) in courseDetails.courseDescription.units" :key="val" class="content">
                            <p class="title is-size-4 is-family-monospace has-text-centered">{{val}}</p>
                            <p class="subtitle is-size-4 is-family-monospace has-text-centered">{{key}}</p>
                            <hr />
                        </div>

                        <div v-if="Object.keys(courseDetails.courseDescription.textbooks).length !== 0">
                            <h2 class="is-size-3 has-text-centered is-family-sans-serif">Text Books</h2>
                            <br />
                            <div v-for="val in courseDetails.courseDescription.textbooks" :key="val" class="content">
                                <p class="subtitle is-size-4 is-family-monospace has-text-centered">{{val}}</p>
                                <hr />
                            </div>
                        </div>
                        <div v-if="Object.keys(courseDetails.courseDescription.references).length !== 0">
                            <h2 class="is-size-3 has-text-centered is-family-sans-serif">References</h2>
                            <br />
                            <div v-for="val in courseDetails.courseDescription.references" :key="val" class="content">
                                <p class="subtitle is-size-4 is-family-monospace has-text-centered">{{val}}</p>
                                <hr />
                            </div>
                        </div>

                        <div class="control has-text-centered">
                            <button type="submit" class="button is-dark is-medium is-family-monospace" @click="visible = !visible, visible1=!visible1">Q&A</button>
                            <button type="submit" class="button is-dark is-medium is-family-monospace" @click="visible = !visible, visible2=!visible2">Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ----------------------------------------------------------------------------------------- -->
    <!-- Questions -->

    <div v-if="visible1" class="container has-text-centered">
        <h1 class="title is-family-secondary is-size-1">Questions</h1>
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
            <button type="submit" class="button is-dark is-medium is-family-monospace" @click="visible1 = !visible1, visible2=!visible2">Review</button>
            <button type="submit" class="button is-dark is-medium is-family-monospace" @click="visible = !visible, visible1=!visible1">Go Home</button>
        </div>
    </div>

    <!-- ----------------------------------------------------------------------------------------------- -->

    <div v-if="visible2" class="container has-text-centered">
        <h1 class="title is-family-secondary is-size-1">Reviews</h1>
        <div class="panel">
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam itaque possimus alias perferendis, dolores cumque inventore ut. Fuga ipsam ducimus cum vitae repudiandae nemo, ut ullam distinctio maiores! Vitae.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas, ipsum, veritatis sint debitis cumque at voluptates id deserunt nisi i llo temporibus sed eum in fugiat obcaecati asperiores consequatur illum?
            </a>
        </div>
        <div class="control has-text-centered pad">
            <button type="submit" class="button is-dark is-medium is-family-monospace but1" @click="visible2 = !visible2, visible1=!visible1">Q&A</button>
            <button type="submit" class="button is-dark is-medium is-family-monospace" @click="visible = !visible, visible2=!visible2">Go Home</button>
        </div>

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
import {
    fireDb
} from "@/services/firebase.js";
import {
    mapGetters
} from "vuex";
import Accordion from '~/components/Accordion';

export default {
    components: {
        Accordion
    },
    data() {
        return {
            visible: false,
            visible1: false,
            visible2: false
            //     code: "",
            //     courseName: this.$route.params.courseName,
            //     courseCode: this.$route.params.courseCode,
            //     courseDetails: "",
            //     courseDescriptionkey: "",
            //     courseDescriptionvalue: "",

            //     textbook: "",
            //     textbookskey: "",
            //     textbooksvalue: "",

            //     references: "",
            //     referenceskey: "",
            //     referencesvalue: ""
        };
    },
    // mounted: function() {
    //   this.courseSearch = this.courseCode;
    //   this.searchCourse();
    // },
    // async asyncData({ app, params, error }) {
    //   const ref = fireDb.collection("courses").doc("15CSE102");
    //   var snap;
    //   var reference, referenceskeys, referencesvalues;
    //   var tb, tbkey, tbval;

    //   try {
    //     snap = await ref.get();
    //     reference = snap.data().courseDescription.references;
    //     tb = snap.data().courseDescription.textbooks;
    //     if (reference != "[object Object]") {
    //       referenceskeys = Object.entries(
    //         snap.data().courseDescription.references
    //       ).map(([key, value]) => key);
    //       referencesvalues = Object.entries(
    //         snap.data().courseDescription.references
    //       ).map(([key, value]) => value);
    //     }

    //     if (tb != undefined) {
    //       tbkey = Object.entries(snap.data().courseDescription.textbooks).map(
    //         ([key, value]) => key
    //       );
    //       tbval = Object.entries(snap.data().courseDescription.textbooks).map(
    //         ([key, value]) => value
    //       );
    //     }
    //   } catch (e) {
    //     console.error(e);
    //   }
    //   return {
    //     courseCode: snap.data().courseCode,
    //     courseName: snap.data().courseName,
    //     courseDescriptionkey: Object.entries(
    //       snap.data().courseDescription.units
    //     ).map(([key, value]) => key),
    //     courseDescriptionvalue: Object.entries(
    //       snap.data().courseDescription.units
    //     ).map(([key, value]) => value),
    //     textbookskey: tbkey,
    //     textbooksvalue: tbval,
    //     references: reference,
    //     referenceskey: referenceskeys,
    //     referencesvalue: referencesvalues
    //   };
    // },
    computed: {
        ...mapGetters({
            courseCode: "course/getCourseCode",
            courseDetails: "course/getCourseDetails"
        })
    }
};
</script>
