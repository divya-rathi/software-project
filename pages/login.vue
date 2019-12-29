<template>
<section class="section">
    <particles-bg num=50 type="cobweb" :bg="true" />
    <div class="container">
        <h1 class="title is-size-1 has-text-centered is-family-secondary">Login</h1>

        <form action="" method="post" @submit.prevent="login">
            <div class="field">
                <div class="control">
                    <input type="email" class="input has-text-centered" name="email" v-model="email" placeholder="Tell us your email address.." />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input type="password" class="input has-text-centered" v-model="password" placeholder="Paswword here!" />
                </div>
            </div>

            <div class="control has-text-centered">
                <button type="submit" class="button is-dark is-rounded is-outlined is-medium is-family-primary">Log In</button>
            </div>
        </form>
    </div>

</section>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

::placeholder {
    color: #ff7315;
}

.container {
    width: 70vw;
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
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {

        }
    }

}
</script>
