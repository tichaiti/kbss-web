<template>
    <img :src='src' :alt='alt' :class='className'>
</template>


<script>
export default {
    name: 'Image',
    props: {
        className: String,
        alt: String,
        src: String,
    },
};
</script>
