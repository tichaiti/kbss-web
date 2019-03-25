<template>
    <table :class='className'>
        <slot></slot>
    </table>
</template>


<script>
export default {
    name: 'Table',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
