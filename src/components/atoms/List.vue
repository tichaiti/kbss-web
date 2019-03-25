<template>
    <li :class='className'>
        <slot></slot>
    </li>
</template>


<script>
export default {
    name: 'List',
    props: {
        className: {
            type: String,
            default: '',
        },
    },
};
</script>
