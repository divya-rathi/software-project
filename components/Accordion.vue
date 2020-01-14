<template>
<article class="message" :class="accordionClasses">
    <div class="message-header is-family-primary is-size-5" @click="toggleAccordion">
        {{ question }}
        <button class="delete is-medium" aria-label="delete"></button>
    </div>
    <div class="message-body">
        <div class="message-content is-size-5 is-family-monospace">
            {{ answer }}
        </div>
    </div>
</article>
</template>

<style lang="scss" scoped>
.message {
    width: 90vw;
}

.message-header {
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 5px;
}

.message-body {
    padding: 0;
    max-height: 15em;
    overflow-y: scroll;
    transition: 0.3s ease-in-out all;

    &::-webkit-scrollbar {
        display: none;
    }
}

.delete {
    transition: 0.3s ease-in-out all;
    background-color: black;
    color: black;
}

.is-closed {
    .message-body {
        max-height: 0;
    }

    .delete {
        transition: 0.3s ease-in-out all;
        transform: rotate(-135deg);
    }
}

.message-content {
    padding: 1rem;
}
</style>

<script>
export default {
    name: 'Accordion',
    props: ['question', 'answer'],
    data: function () {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleAccordion: function () {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        accordionClasses: function () {
            return {
                'is-closed': !this.isOpen,
                '': this.isOpen
            };
        }
    }
}
</script>
