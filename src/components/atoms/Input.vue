<template>
   <input
        :type='type'
        :placeholder='placeholder'
        :class="className"
        class='input'
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
        placeholder: String,
        className: String,
    },
};
</script>

<style>
    .input {
        margin: 0;
        max-width: 100%;
        outline: 0;
        text-align: left;
        line-height: 1.21428571em;
        padding: .67857143em 1em;
        background: #fff;
        border: 1px solid rgba(34,36,38,.15);
        color: rgba(0,0,0,.87);
        border-radius: .28571429rem;
    }

    .large {
        width: 250px;
    }
</style>
