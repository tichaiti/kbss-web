<template>
    <div v-bind="$props">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'DivSection',
    props: {
        className: String,
    },
};
</script>
