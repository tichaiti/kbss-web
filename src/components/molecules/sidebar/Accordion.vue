<template>
    <Div class="accordion" >
        <Button
            :click="toggleAccordion"
            v-bind:class="classObject">
            {{title}}
        </Button>

        <Div
            class="panel"
            v-if="isActive">
            <slot></slot>
        </Div>
    </Div>
</template>


<script>
import { Div, Button } from '../../atoms';

export default {
    data() {
        return {
            isActive: false,
        };
    },

    computed: {
        classObject() {
            return {
                active: this.isActive,
            };
        },
    },
    components: {
        Div,
        Button,
    },

    methods: {
        toggleAccordion() {
            this.isActive = !this.isActive;
        },
    },
    props: {
        title: String,
    },
};
</script>

<style>
    .accordion button {
        width: 100%;
        cursor: pointer;
        text-align: left;
    }

    .accordion button:after {
        content: '\2228';
        float: right;
        margin-left: 5px;
    }

    .accordion button:before {
        content: '\1F3E2';
    }

    .active {
        /* background: red; */
    }

    .accordion .active:after {
        content: '\2227'
    }

    .panel {
        padding: 0 18px;
        overflow: hidden;
    }
</style>
