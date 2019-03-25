<template>
   <input
        :type='type'
        :placeholder='placeholder'
        :class="className"
    >
</template>


<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        className: {
            type: String,
            default: 'input',
        },
    },
};
</script>

<style>
    .input {
        width: 250px;
        border-radius: 4px;
        padding: 5px;
        outline: none;
        border: 1px solid lightgrey;
    }
</style>
