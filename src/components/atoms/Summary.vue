<template>
    <summary :class='className'>
        <slot></slot>
    </summary>
</template>


<script>
export default {
    name: 'Summary',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
