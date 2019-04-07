<template>
    <h1 v-bind="$props">
        <slot></slot>
    </h1>
</template>


<script>
export default {
    name: 'Heading',
    props: {
        title: {
            type: String,
            default: 'Title',
        },
    },
};
</script>


<style>
    h1 {
        font-size: 2em;
    }
</style>
