<template>
  <div>
    <div v-if="!visible" class="hero is-fullheight">
      <h1
        class="has-text-centered is-size-1 is-family-sans-serif title"
      >{{courseCode}} - {{ courseName }}</h1>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column card is-hidden-mobile">
              <div
                class="card-content"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis praesentium alias excepturi mollitia libero quas dicta repudiandae a nemo numquam nobis neque nostrum laborum, laudantium sint vel molestiae sed!</div>
              <div class="has-text-centered">Rating comes here</div>
            </div>
            <div class="column is-three-quarters">
              <div class="content">
                <h1 class="title is-size-2 is-family-sans-serif has-text-centered">Coming soon.</h1>
                <p
                  class="subtitle is-size-3 is-family-monospace has-text-centered"
                >{{courseDescription}}</p>
              </div>
              <div>
                <div class="control has-text-centered bottom1">
                  <button
                    type="submit"
                    class="button is-rounded is-dark is-medium is-family-monospace"
                    @click="visible = !visible, visible1=!visible1"
                  >Q&A</button>
                  <button
                    type="submit"
                    class="button is-rounded is-dark is-medium is-family-monospace"
                    @click="visible = !visible, visible2=!visible2"
                  >Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ----------------------------------------------------------------------------------------- -->
    <div v-if="visible1" class="container has-text-centered">
      <h1 class="title is-family-secondary is-size-1">Questions</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas, ipsum, veritatis sint debitis cumque at voluptates id deserunt nisi illo temporibus sed eum in fugiat obcaecati asperiores consequatur illum?
        </a>
      </div>
      <button
        type="submit"
        class="button is-rounded is-dark is-medium is-family-monospace"
        @click="visible1 = !visible1, visible2=!visible2"
      >Review</button>
      <button
        type="submit"
        class="button is-rounded is-dark is-medium is-family-monospace"
        @click="visible = !visible, visible1=!visible1"
      >Go Home</button>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas, ipsum, veritatis sint debitis cumque at voluptates id deserunt nisi illo temporibus sed eum in fugiat obcaecati asperiores consequatur illum?
        </a>
      </div>
      <button
        type="submit"
        class="button is-rounded is-dark is-medium is-family-monospace"
        @click="visible2 = !visible2, visible1=!visible1"
      >Q&A</button>
      <button
        type="submit"
        class="button is-rounded is-dark is-medium is-family-monospace"
        @click="visible = !visible, visible2=!visible2"
      >Go Home</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel-block {
  padding-top: calc(1rem + 2vh);
  padding-bottom: calc(1rem + 2vh);
}

.button {
  color: white;
}

.title {
  padding-top: calc(1.5rem + 2vh);
}
</style>

<script>
import { fireDb } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      courseName: "",
      courseCode: "",
      courseDescription: ""
    };
  },
  async asyncData({ app, params, error }) {
    const ref = fireDb.collection("Course").doc("15CSE100");
    let snap;
    try {
      snap = await ref.get();
    } catch (e) {
      console.error(e);
    }
    return {
      courseCode: snap.data().courseCode,
      courseName: snap.data().courseName,
      courseDescription: snap.data().courseDescription.units
    };
  }
};
</script>
