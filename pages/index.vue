<template>
<section class="section edo-theme">
    <div class="carousel">
        <div class="card top">
            <div class="card-image">
                <figure class="image">
                    <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
                <router-link :to="{name:'course'}" class="btn btn-primary btn-md btn-rounded" @click.native="setcourseCode(courseCode1)">View</router-link>
            </div>
        </div>

        <div class="card top">
            <div class="card-image">
                <figure class="image">
                    <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
               <router-link :to="{name:'course'}" class="btn btn-primary btn-md btn-rounded" @click.native="setcourseCode(courseCode2)">View</router-link>
            </div>
        </div>

        <div class="card top">
            <div class="card-image">
                <figure class="image">
                    <img src="https://bulma.io/images/placeholders/600x480.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
               <router-link :to="{name:'course'}" class="btn btn-primary btn-md btn-rounded" @click.native="setcourseCode(courseCode3)">View</router-link>
            </div>
        </div>

    </div>

</section>
</template>

<style lang="scss" scoped>
.carousel {
    display: flex;
    height: auto;
    margin-top: 60px;
    margin-bottom: 100px;
}

.top {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 25%;
}

a.btn.btn-primary {
    color: #fff;
    font-size: 14px;
}

.btn.btn-md {
    padding: .7rem 1.6rem;
    font-size: .7rem
}

.btn-md {
    padding-top: .58rem;
    padding-bottom: .58rem
}

.btn-rounded {
    -webkit-border-radius: 10em;
    border-radius: 10em
}

.btn-primary {
    background-color: #4285f4 !important;
    color: #fff;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    text-transform: uppercase;
}
</style>

<script>
export default {
    components: {},
    data(){
        return{
            courseCode1:"15CSE111",
            courseCode2:"15CSE102",
            courseCode3:"15CSE111",
        }
    },
    methods:{
        setcourseCode(courseCode){
            this.$store.dispatch('course/search',courseCode);
            
        },
    }
    
    
}
</script>
