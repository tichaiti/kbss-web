<template>
    <Div class="header">
        <Logo />
        <ProfileImage />
    </Div>
</template>


<script>
import { ProfileImage, Logo } from '../molecules';
import { Div } from '../atoms';


export default {
    name: 'LoginSection',

    components: {
        ProfileImage,
        Logo,
        Div,
    },
    props: String,
};

</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

</style>
