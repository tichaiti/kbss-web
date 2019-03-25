<template>
    <ul :class='className'>
        <slot></slot>
    </ul>
</template>


<script>
export default {
    name: 'Unorderlist',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
