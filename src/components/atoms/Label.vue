<template>
    <label
        class="label"
        :id="id"
        :for="name"
    >
        <slot>{{name}}</slot>
    </label>
</template>


<script>
export default {
    name: 'Label',
    props: {
        name: String,
        className: String,
        id: String,
    },
};
</script>

<style>
    .label {
        width: 100px;
        padding: 10px 0px;
    }
</style>
