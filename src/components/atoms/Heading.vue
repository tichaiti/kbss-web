<template>
    <h1 :class="className"> {{title}} </h1>
</template>


<script>
export default {
    name: 'Heading',
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        className: String,
    },
};
</script>
