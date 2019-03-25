<template>
    <section :class='className'>
        <slot></slot>
    </section>
</template>


<script>
export default {
    name: 'Section',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
