<template>
    <button
        v-bind="$props">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'Button',
};
</script>

<style>
    .button {
        width: 100px;
        padding: .78571429em 1.5em .78571429em;
        background-color: #2185d0;
        text-align: center;
        color: #fff;
        text-shadow: none;
        background-image: none;
        cursor: pointer;
        border-radius: .28571429rem;
        user-select: none;
        outline: none;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

</style>
