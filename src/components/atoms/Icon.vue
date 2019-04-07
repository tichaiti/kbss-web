<template>
    <i v-bind="$props">
        <slot></slot>
    </i>
</template>


<script>
export default {
    name: 'Icon',
};
</script>
