<template>
    <p v-bind="$props">
       <slot></slot>
    </p>
</template>


<script>
export default {
    name: 'Text',
    props: Object,
};
</script>


<style>
    p {
        line-height: 1.5;
    }
</style>
