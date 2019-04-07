<template>
    <Div class="icon-text">
        <Icon :class="generateIconName"/>
        <Paragraph>
            <slot></slot>
        </Paragraph>
    </Div>
</template>


<script>
import { Div, Paragraph, Icon } from '../../atoms';

export default {
    components: {
        Div,
        Paragraph,
        Icon,
    },
    computed: {
        generateIconName() {
            const iconName = `fas fa-${this.$props.iconName}`;
            return iconName;
        },
    },
    props: {
        iconName: String,
    },
};
</script>

<style>
   .icon-text {
       display: flex;
       align-items: center;
   }

   .icon-text p {
       margin-left: 10px;
   }

</style>
