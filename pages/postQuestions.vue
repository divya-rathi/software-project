<template>
<div class="container" style="margin-top: 50px">
    <h1 class="has-text-centered is-size-1 is-family-sans-serif title">15CSE111-Computer Science and engineering</h1>
    <h2 class="has-text-centered is-size-2 is-family-secondary title">Questions</h2>
    <div class="panel">
    <article id ="1" class="questions is-closed" :class="accordionClasses">
    <div class="panel-block is-success" @click="toggleAccordion(1)">
        <div class="columns">
            <div class="column is-1">
                <p>Up</p>
                <br />
                <p>votes</p>
                <br />
                <p>down</p>
            </div>
            <div class="column is-11">
                <h3 class="is-size-5">Username</h3>
                <br />
                <h4 class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam itaque possimus alias perferendis, 
                    dolores cumque inventore ut.</h4>
            </div>
        </div>
        
    </div>
    <div class="message-body">
        <div class="message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <strong>Pellentesque risus mi</strong>
        </div>    
    </div>
    </article>

    <article id ="2" class="questions is-closed" :class="accordionClasses">
    <div class="panel-block" @click="toggleAccordion(2)">
        <div class="columns">
            <div class="column is-1">
                <p>Up</p>
                <br />
                <p>votes</p>
                <br />
                <p>down</p>
            </div>
            <div class="column is-11">
                <h3 class="is-size-5">Username</h3>
                <br />
                <h4 class="is-size-4">Fuga ipsam ducimus cum vitae repudiandae nemo, ut ullam distinctio maiores! Vitae.</h4>
            </div>
        </div>
    </div>
    <div class="message-body">
        <div class="message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <strong>Pellentesque risus mi</strong>
        </div>    
    </div>
    </article>

    <article id ="3" class="questions is-closed" :class="accordionClasses">
    <div class="panel-block" @click="toggleAccordion(3)">
        <div class="columns">
            <div class="column is-1">
                <p>Up</p>
                <br />
                <p>votes</p>
                <br />
                <p>down</p>
            </div>
            <div class="column is-11">
                <h3 class="is-size-5">Username</h3>
                <br />
                <h4 class="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi</h4>
            </div>
        </div>
    </div>
    <div class="message-body">
        <div class="message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <strong>Pellentesque risus mi</strong>
        </div>    
    </div>
    </article>
  
    <article id ="4" class="questions is-closed" :class="accordionClasses">
    <div class="panel-block" @click="toggleAccordion(4)">
        <div class="columns">
            <div class="column is-1">
                <p>Up</p>
                <br />
                <p>votes</p>
                <br />
                <p>down</p>
            </div>
            <div class="column is-11">
                <h3 class="is-size-5">Username</h3>
                <br />
                <h4 class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident quis officia numquam? </h4>
            </div>
        </div>
    </div>
    <div class="message-body">
        <div class="message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <strong>Pellentesque risus mi</strong>
        </div>    
    </div>
    </article>
</div>
    <div class="column is-12">
    <span>
        <a class="is-pulled-right button" href="#viewMore">View more</a>
    </span>
    </div>
    <div class="has-text-centered" >
        <button id="postButtonFirst" class="is-centered button is-success is-family-monospace" @click="postQuestion">Post your Question</button>
        <div id = "post" class= "textbox">
            <textarea class="textarea is-success" placeholder="Type your question here"></textarea>
        </div>
        <button id="postButtonSecond" class="is-pulled-right button is-success is-family-monospace" style="margin-top: 40px; visibility:hidden" >Post your Question</button>
    </div>
    </div>

</template>
<script>
export default {
    data: {
        isOpen: true
    },
    methods: {
        toggleAccordion: function(id) {
            if(this.isOpen){                
                //document.getElementById(id).querySelector('.panel').classList.remove('is-closed')
                document.getElementById(id).classList.remove('is-closed')
            }
            else{
                //document.getElementById(id).querySelector('.panel').classList.remove('is-closed')
                document.getElementById(id).classList.add('is-closed')
            }
            this.isOpen = !this.isOpen
        },
        postQuestion: function(){
            document.getElementById("post").style.visibility = 'visible'
            document.getElementById("postButtonFirst").style.visibility = 'hidden'
            document.getElementById("postButtonSecond").style.visibility = 'visible'
            document.getElementById("post").style.marginTop = 0;
        }
    }
}
</script>
<style>
.questions {
    margin: auto;
}
.message-body{
    padding: 0;
    height: auto;
    overflow: hidden;
    transition: 0.3s ease all;
}
.is-closed .message-body{
    max-height: 0;
}
.message-content{
    padding: 20px;
}
.panel-block{
    cursor: pointer;
    display: block;
}
.textbox{
    margin-top: 50px;
    visibility: hidden;
}
.column.is-1{
    padding: 15px;
    line-height: 1;
}
.column.is-11{
    line-height: 1.25;
}
.column.is-12{
    margin-bottom: 30px;
}
</style>