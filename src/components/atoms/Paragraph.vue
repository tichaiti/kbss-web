<template>
    <p> {{name}} </p>
</template>


<script>
export default {
    name: 'Paragraph',
    props: {
        name: {
            type: String,
            default: '',
        },
    },
};
</script>
