<template>
    <img v-bind="$props" />
</template>


<script>
export default {
    name: 'Image',
    props: {
        className: String,
    },
};
</script>
