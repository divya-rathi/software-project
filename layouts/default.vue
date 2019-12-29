<template>
<div>
    <a>
        <nuxt-link to="/course">course</nuxt-link>
    </a>
    <a class="is-pulled-right">
        <nuxt-link to="/login">Login</nuxt-link>
    </a>
    <nuxt />
</div>
</template>

<style>
a
{
    color: red;
}
</style>

<script>
export default {
    components: {}
}
</script>
