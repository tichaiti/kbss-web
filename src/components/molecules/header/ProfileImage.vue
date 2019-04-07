<template>
    <Div class="profile-image">
        <Icon class="fas fa-user"/>
        <Paragraph> Esterling Accime</Paragraph>
    </Div>
</template>


<script>
import { Div, Icon, Paragraph } from '../../atoms';

export default {
    components: {
        Div,
        Icon,
        Paragraph,
    },
};
</script>

<style>
    .profile-image {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .profile-image .fa-user {
        font-size: 2em;
    }

    .profile-image p {
        margin-left: 10px;
    }
</style>
