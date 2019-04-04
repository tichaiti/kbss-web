<template>
    <form :class="className">
        <slot></slot>
    </form>
</template>


<script>
export default {
    name: 'Button',
    props: {
        className: String,
    },
};
</script>
