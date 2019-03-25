<template>
    <a :class='className'>
        <slot></slot>
    </a>
</template>


<script>
export default {
    name: 'Link',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
