<template>
<section class="section">
    <particles-bg num=50 type="cobweb" :bg="true" />
    
</section>
</template>

<style lang="scss" scoped>
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

    }

}
</script>
