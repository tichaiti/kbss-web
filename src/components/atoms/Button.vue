<template>
    <button :class="className">
        <slot>{{name}}</slot>
    </button>
</template>


<script>
export default {
    name: 'Button',
    props: {
        name: {
            type: String,
            default: 'Button',
        },
        className: {
            type: String,
            default: 'button',
        },
    },
};
</script>

<style>
    .button {
        width: 100px;
        padding: 10px;
    }
</style>
