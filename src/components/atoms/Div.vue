<template>
    <div :class='className'>
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'DivSection',
    props: {
        className: String,
    },
};
</script>
